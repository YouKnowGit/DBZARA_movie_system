import requests
from bs4 import BeautifulSoup


class CrawlingMovieReview:
    BASE_URL = 'https://movie.naver.com'

    def __init__(self):
        self.star_score = []
        self.score_reple = []

    def get_movie_code_by_title(self, title):
        response = requests.get(self.BASE_URL + f'/movie/search/result.naver?query={str(title)}&section=all&ie=utf8')
        if response.status_code == 200:
            html = response.text
            soup = BeautifulSoup(html, 'html.parser')
            code = soup.find('p', {'class': 'result_thumb'})
            if code:
                code = code.find('a')['href'].split('code=')[-1]
                return code
        return None

    def get_comment_by_code(self, movie):
        if movie is None:
            return
        response = requests.get(
            self.BASE_URL + f'/movie/bi/mi/pointWriteFormList.naver?code={str(movie)}&type=after&isActualPointWriteExecute=false&isMileageSubscriptionAlready=false&isMileageSubscriptionReject=false&page=1')
        if response.status_code == 200:
            html = response.text
            soup = BeautifulSoup(html, 'html.parser')
            total = soup.find('strong', {'class': 'total'})
            if total:
                total = int(total.find('em').string.replace(',', ''))
            else:
                return None

        for page in range(1, total // 50):
            response = requests.get(
                self.BASE_URL + f'/movie/bi/mi/pointWriteFormList.naver?code={str(movie)}&type=after&isActualPointWriteExecute=false&isMileageSubscriptionAlready=false&isMileageSubscriptionReject=false&page={str(page)}')
            if response.status_code == 200:
                html = response.text
                soup = BeautifulSoup(html, 'html.parser')
                results = soup.find('div', {'class': 'score_result'}).find('ul').find_all('li')
                for idx, result in enumerate(results):
                    try:
                        score = result.find('div', {'class': 'star_score'}).find('em').string
                        comment = result.find('span', {'id': f'_filtered_ment_{str(idx)}'}).string.strip()
                        sympathy = int(
                            result.find('a', {'class': '_sympathyButton'}).find('strong').string.replace(',', ''))
                        not_sympathy = int(
                            result.find('a', {'class': '_notSympathyButton'}).find('strong').string.replace(',', ''))
                    except AttributeError as e:
                        print(e)
                        score = -1
                    finally:
                        if score != -1:
                            Review.create(
                                score=score,
                                comment=comment,
                                sympathy=sympathy,
                                not_sympathy=not_sympathy
                            )


if __name__ == '__main__':
    main = CrawlingMovieReview()
    movie = main.get_movie_code_by_title('ㄱㄴㄷㄹㅁㅂㅅ')