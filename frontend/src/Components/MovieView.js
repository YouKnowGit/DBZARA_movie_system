import React from "react";
import styled from "styled-components";
import { Box, Button } from "@material-ui/core";

const ageColor = {
  '전체' : {
    "color" : "#60c9e3",
    "border" : "1px solid #60c9e3",
    "font-size" : "12px",
    "line-height" : "1",
    "padding" : "5px 25px 0px 0px"
  },
  '12' : {
    "color" : "#6dd551",
    "border" : "1px solid #6dd551",
    "font-size" : "15px",
    "line-height" : "0.7",
    "padding" : "5px 0px 0px 0px"
  },
  '15' : {
    "color" : "#fbac30",
    "border" : "1px solid #fbac30",
    "font-size" : "15px",
    "line-height" : "0.7",
    "padding" : "5px 0px 0px 0px"
  },
  '청불' : {
    "color" : "#d30101",
    "border" : "1px solid #d30101",
    "font-size" : "12px",
    "line-height" : "1",
    "padding" : "5px 25px 0px 0px"
  }
}

const MoviePoster = ({ rank, src, age, title, ticketSales, rates }) => {  
  return (
    <>
      <Container>
        <Img_thumb>
          <Poster src={src} alt="poster"/>
          <BtnContainer>
            <Over_btn>
              <Btn>예매</Btn>
              <Btn>정보</Btn>
            </Over_btn>
          </BtnContainer>
        </Img_thumb>
        <Mv_info>
          <Mv_tit>
            <Age ageAttr={ageColor[age]}>{age}</Age>
            {title}
          </Mv_tit>
          <Mv_txt>
            <TicketSales>예매율 : {ticketSales}</TicketSales>
            <Rates>평점 : {rates}</Rates>
          </Mv_txt>
        </Mv_info>
      </Container>
    </>
  );
};

export default MoviePoster;


const Container = styled(Box)`
  && {
    height: 486.8px;
    width: 275.5px;
    display: inline-block;
    vertical-align: top;
    border: 1px solid #e5e5e5;
    cursor: pointer;
  }
`;

const Img_thumb = styled.div`
  position: relative;
  height: 392px;
  overflow: hidden;
  background: #e5e5e5;
`;

const Poster = styled.img`
  width: 100%;
`;

const BtnContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1;
  transition: opacity .3s;
  &:hover {
    opacity: 1;
  }
`;

const Over_btn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Btn = styled(Button)`
  && {
    margin: 10px auto 0;
    display: block;
    width: 150px;
    height: 58px;
    font-size: 16px;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, .5);
    &:hover {
      color: #ec6159;
      border: 1px solid #ec6159;
    }
  }
`;

const Mv_info = styled.div`
  padding: 25px 0;
  text-align: center;
  background: #fff;
`;

const Mv_tit = styled.p`
  margin: 0 auto;
  max-width: 240px;
  font-size: 19px;
  line-height: 20px;
  font-weight: normal;
  color: #2b2b2b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const Mv_txt = styled.p`
  margin-top: 10px;
`;

const Age = styled.span`
  margin-right: 5px;
  color: ${props => props.ageAttr['color']};
  border: ${props => props.ageAttr['border']};
  padding: ${props => props.ageAttr['padding']};
  display: inline-block;
  width: 25px;
  height: 22px;
  line-height: ${props => props.ageAttr['line-height']};
  text-align: center;
  font-size: ${props => props.ageAttr['font-size']};
`;

const TicketSales = styled.span`
  margint-left: 0;
  padding-left: 0;
  border: none;
  display: inline-block;
  vertical-align: top;
  font-size: 13px;
  color: black;
`;

const Rates = styled.span`
  margin-left: 9px;
  padding-left: 10px;
  display: inline-block;
  vertical-align: top;
  font-size: 13px;
  border-left: 1px solid #ccc;
  color: black;
`;