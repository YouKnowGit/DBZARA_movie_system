import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import SideBar from "Components/SideBar";
import { useCookies } from "react-cookie";
import Login from "../Routes/Login";
import Dialog from "@material-ui/core/Dialog";
import GoogleLogin from "react-google-login";
import KakaoLogin from "react-kakao-login";
import { UserContext } from "../context";
import { socialAPI } from "../junsu-api";
// TODO 메뉴, 서치 클릭 -> 사이드바

export default withRouter(({ location: { pathname } }) => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const outHover = () => {
    setHover(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // 스크롤 이벤트
  const [position, setPosition] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const onScroll = () => {
    if (window.scrollY >= 70) setPosition(true);
    else setPosition(false);
  };

  const { userInfo, handleUserInfo } = useContext(UserContext);

  const responseGoogle = async (response) => {
    const { profileObj } = response;
    const token = await socialAPI.googleLogin(profileObj);
    if (token.data.token) {
      handleUserInfo(token.data.token);
      handleClose();
      setCookie("token", token.data.token, {
        path: "/",
        secure: true,
        sameSite: "none",
      });
    }
  };

  const onSuccess = async (response) => {
    const { profile } = response;
    const token = await socialAPI.kakaoLogin(profile);
    if (token.data.token) {
      handleUserInfo(token.data.token);
      handleClose();
      setCookie("token", token.data.token, {
        path: "/",
        secure: true,
        sameSite: "none",
      });
    }
  };

  const onFailure = (response) => {
    console.log(response);
  };

  useEffect(() => {
    if (window.Kakao !== undefined) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_LOGIN_API);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll); //메모리누수 방지
    };
  }, []);

  // sidebarOpen
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <Header current={pathname !== "/"} scrollY={position}>
        <List>
          <Logo>
            <SLink to="/">Logo</SLink>
          </Logo>
        </List>
        <List>
          <SubListBg hover={hover} />
          <Item
            current={pathname === "/Reservation"}
            onMouseOver={() => onHover()}
            onMouseOut={() => outHover()}
          >
            <SLink to="/Reservation">
              <LinkText>예매</LinkText>
              {/* {console.log(hover)} */}
            </SLink>
            {["빠른예매", "예매안내", "예매권 등록"].map((item, idx) => {
              if (idx === 0) {
                return (
                  <TabLi to="/Reservation" hover={hover}>
                    {item}
                  </TabLi>
                );
              } else if (idx === 1) {
                return (
                  <TabLi to="/GuideInfo" hover={hover}>
                    {item}
                  </TabLi>
                );
              } else {
                return (
                  <TabLi to="/MyPage" hover={hover}>
                    {item}
                  </TabLi>
                );
              }
            })}
          </Item>
          <Item
            current={pathname === "/Movies"}
            onMouseOver={() => onHover()}
            onMouseOut={() => outHover()}
          >
            <SLink to={"/Movies"}>
              <LinkText>영화</LinkText>
            </SLink>
            {["예매순위", "평점순위", "개봉예정작"].map((item, idx) => {
              if (idx === 0) {
                return (
                  <TabLi to="/Movies" hover={hover}>
                    {item}
                  </TabLi>
                );
              } else if (idx === 1) {
                return (
                  <TabLi to="/Movies/Review-Rating" hover={hover}>
                    {item}
                  </TabLi>
                );
              } else {
                return (
                  <TabLi to="/Upcoming-Release" hover={hover}>
                    {item}
                  </TabLi>
                );
              }
            })}
          </Item>
          <Item
            current={pathname === "/Event"}
            onMouseOver={() => onHover()}
            onMouseOut={() => outHover()}
          >
            <SLink to="/Event">
              <LinkText>이벤트</LinkText>
            </SLink>
            {["시사회", "이벤트"].map((item) => (
              <TabLi to="/" hover={hover}>
                {item}
              </TabLi>
            ))}
          </Item>
          <Item
            current={pathname === "/Event"}
            onMouseOver={() => onHover()}
            onMouseOut={() => outHover()}
          >
            <SLink to="/Store">
              <LinkText>스토어</LinkText>
            </SLink>

            {["스낵", "음료", "콤보"].map((item, idx) => (
              <TabLi
                to={{
                  pathname: "/Store",
                  state: {
                    index: 123,
                  },
                }}
                hover={hover}
              >
                {item}
              </TabLi>
            ))}
          </Item>
        </List>
        <List>
          {cookies.token ? (
            <SLink to="/MyPage">
              <i className="fas fa-user"></i>
            </SLink>
          ) : (
              <>
                <span style={{ fontSize: "15px" }} onClick={handleClickOpen}>
                  로그인
              </span>
                <div>
                  <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <LoginModal>
                      <div>
                        <ModalHeader>간편하게 SNS 회원가입</ModalHeader>
                        <LoginIcon>
                          <GoogleLogin
                            clientId={process.env.REACT_APP_GOOGLE_LOGIN_ID}
                            // buttonText="구글로 로그인하기"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={"single_host_origin"}
                            render={(props) => (
                              <img
                                onClick={props.onClick}
                                src={require("assets/google.png").default}
                              />
                            )}
                          ></GoogleLogin>
                          <KakaoLogin
                            Label="20%"
                            token={process.env.REACT_APP_KAKAO_LOGIN_API}
                            onSuccess={onSuccess}
                            onFail={onFailure}
                            render={(props) => (
                              <img
                                onClick={props.onClick}
                                src={require("assets/kakao.png").default}
                              />
                            )}
                          ></KakaoLogin>
                          <img src={require("assets/facebook.png").default} />
                        </LoginIcon>
                      </div>
                    </LoginModal>
                  </Dialog>
                </div>
              </>
            )}

          <LoginItem onClick={() => setSideBar(true)}>🟦</LoginItem>
        </List>
        <Side open={sideBar}>
          <SideBar setSideBar={setSideBar} />
          {/* {console.log("sideBar1", sideBar)} */}
        </Side>
      </Header>
    </>
  );
});

const Header = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1200px;
  height: 70px;
  display: flex;
  align-items: flex-start;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) =>
    props.current
      ? "RGB(38, 38, 38)"
      : props.scrollY
        ? "RGB(38, 38, 38)"
        : "transparent"};
`;

const Logo = styled.div`
  width: 100px;
  font-size: 30px;
  margin: 0 10px;
`;

const Item = styled.div`
  font-size: 18px;
  padding: 0 0 0 20px;
  display: flex;
  width: 110px;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const LoginItem = styled(Item)`
  width: 100px;
  align-items: center;
`;

const SubListBg = styled.div`
  width: 100vw;
  height: 160px;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.85;
  z-index: -1;
  display: ${(props) => (props.hover ? "block" : "none")};
`;

const SLink = styled(Link)`
  margin-bottom: 20px;
`;

const LinkText = styled.p`
  font-size: 20px;
  padding: 5px 0;
  &:hover {
    border-bottom: 1px solid red;
  }
`;

const List = styled.ul`
  display: flex;
  margin-top: 20px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TabLi = styled(Link)`
  font-size: 15px;
  margin-bottom: 10px;
  display: ${(props) => (props.hover ? "block" : "none")};
  &:hover {
    color: red;
  }
`;

const LoginModal = styled.div`
  margin: 3px;
  display: flex;
`;

const LoginIcon = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    margin: 10px;
  }
`;

const LoginButton = styled.div`
  display: flex;
  background-color: red;
  margin: 15px;
  border-radius: 20%;
  width: 350px;
  text-align: center;
  /* margin: 0 0 10px 0; */
`;

const Side = styled.div`
  width: 330px;
  height: 100vh;
  background-color: #252525;
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s ease-out;
  ${(props) => (props.open ? `right: 0` : `right: -330px`)}
`;

const ModalHeader = styled.span`
  padding: 10px;
  display: block;
  text-align: center;
  color: rgba(0, 0, 0, 0.3);
  font-size: 17px;
  margin: 5px;
`;
