import React from "react";
import styled from "styled-components";
import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const MoviePoster = ({ id, bgUrl, index }) => {
  //받아올 데이터
  return (
    <MovieImg>
      <MovieBgImg
        src={bgUrl ? bgUrl : require("../assets/noPosterSmall.png").default}
      />
      {/* <MovieImg> */}
      <Index>{index}</Index>
      <Background>
        <Btn>
          <SLink to={{
              pathname: "/Reservation",
              state: {
                  movie: id
              }
          }}>예매</SLink>
        </Btn>
        <Btn>
          <SLink to={`/MoviesInfo/Index/${id}`}>정보</SLink>
        </Btn>
      </Background>
      {/* </MovieImg> */}
    </MovieImg>
  );
};

export default MoviePoster;

const MovieBgImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

const MovieImg = styled(Box)`
  && {
    position: relative;
    height: 100%;
    width: 100%;
  }
`;
const Index = styled.div`
  z-index: 1;
  width: 40px;
  height: 35px;
  position: absolute;
  opacity: 0.7;
  background-color: #0f0c29;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Background = styled.section`
  width: 100%;
  height: 100%;
  flex-direction: column;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  background-color: #000000;
  &:hover {
    opacity: 0.75;
  }
`;

const Btn = styled(Button)`
  && {
    margin: 3px 0;
    width: 60%;
    height: 40px;
    position: relative;
    font-size: 16px;
    color: RGB(254, 249, 220);
    border: 1px solid RGB(254, 249, 220);
    &:hover {
      border: 1px solid red;
      color: red;
    }
  }
`;

const SLink = styled(Link)``;
