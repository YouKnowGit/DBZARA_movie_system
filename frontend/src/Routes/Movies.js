import React from "react";
import styled from "styled-components";
import MovieView from "Components/MovieView";
import movieData from "movieData";

const Movies = () => (
  <>
    <Container>
      <Movie_rank_cont>
        {movieData.map(movie => {
          return (
            <MovieView 
              rank={movie.rank}
              src={movie.src}
              age={movie.age}
              title={movie.title}
              ticketSales={movie.ticketSales}
              rates={movie.rates}
            />
          )
        })}
      </Movie_rank_cont>
    </Container>
  </>
);

export default Movies;


const Container = styled.div`
  margin: 150px auto 200px;
  width: 1200px
`;

const Movie_rank_cont = styled.div`
  display: grid;
  grid-template-columns: 275.5px 275.5px 275.5px 275.5px;
  gap: 50px 30px;
`;