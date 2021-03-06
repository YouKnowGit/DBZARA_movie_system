import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const FooterCont = styled.div`
  max-width: 100%;
  min-width: 1200px;
  padding-top: 1px;
  padding-bottom: 40px;
  height: 231.88px;
  background-color: #e7e7e7;
  display: block;
  flex-direction: column;
  align-items: center;
`;
const FooterInner = styled.div`
  /* margin-top : 60px;
  line-height: 1; */
  /* margin: 60px; */
  width: 1200px;
  height: 131.875px;
  display: block;
  margin: auto;
`;
const FooterArea = styled.div`
  margin-top: 60px;
  line-height: 1;
`;
// const FooterInfo = styled.div``;
const InfoDl = styled.div`
  font-size: 0;
  float: left;
  /* display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px; */
`;
const InfoDt = styled.div`
  /* width: 188.99px;
  height: 20px;
  font-size: 15px;
  color: #777; */
  padding-right: 75px;
  display: inline-block;
  vertical-align: top;
`;
const DtSpan = styled.span`
  width: 114px;
  font-size: 20px;
  padding-left: 70px;
  font-weight: bold;
  color: #2b2b2b;
  /* background:url('//movie-img.yes24.com/NYes24/new/logo.png') no-repeat 0 -39px; */
`;
const InfoDd = styled.div`
  width: 481.29px;
  height: 131.88px;
  display: inline-block;
  vertical-align: top;
  padding-top: 3px;
`;
const DivDd = styled.div`
  width: 481.29px;
  height: 12.222px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  color: #2b2b2b;
`;
const DdText = styled.div`
  padding: 0 11px;
  display: inline-block;
  vertical-align: top;
  border-left: 1px solid #d0d0d0;
  font-size: 13px;
  color: #2b2b2b;
`;
const DdTextFirst = styled.div`
  padding: 0 11px 0 0;
  border: none;
  font-size: 13px;
  color: #2b2b2b;
  display: inline-block;
  vertical-align: top;
`;
const AddrInfo = styled.div`
  width: 481.29px;
  height: 94.65px;
  margin-top: 25px;
  font-size: 12px;
  color: #939393;
  font-style: normal;
`;
const FcName = styled.span`
  margin-bottom: 10px;
  display: block;
  box-sizing: border-box;
  color: #939393;
  font-size: 13px;
  text-align: left;
`;
const Location = styled.div`
  padding-bottom: 7px;
  font-size: 13px;
  text-align: left;
`;
const Call = styled.div``;
const CallCont = styled.p`
  padding-bottom: 7px;
  text-align: left;
  color: #939393;
  font-style: normal;
  font-size: 12px;
`;
const FooterCall = styled.div`
  position: relative;
  padding-left: 26px;
  float: right;
  width: 248px;
  height: 81.771px;
  border-left: 1px solid #e4e4e4;
`;
const FooterCallCont = styled.div`
  margin-bottom: 19px;
`;
const CallContTxt = styled.p`
  /* padding-bottom:5px;
  font-size:12px;
  color:#939393; */
  padding-bottom: 10px;
  font-size: 14px;
  color: #2b2b2b;
`;
const InquiryLink = styled.span`
  display: block;
  width: 135px;
  text-align: center;
  padding: 10px 20px;
  margin: 5px 0 0;
  background: #1a1a1a;
  color: #fff;
  font-size: 15px;
  border-radius: 5px;
`;
const TopAreaShow = styled.div`
  width: 38px;
  height: 30px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: block !important;
  z-index: 500;
`;

// Todo
// 1. DdText ??????????????? ?????? ???????????? ???????????????
// 2. FooterCont - margin-top??? ????????? ????????? ??????

const Footer = () => {
  return (
    <>
      <FooterCont>
        <FooterInner>
          <FooterArea>
            <InfoDl>
              <InfoDt>
                <DtSpan>DBZARA</DtSpan>
              </InfoDt>
              <InfoDd>
                <DivDd>
                  <DdTextFirst>
                    {/* <body link ="black" vlink ="red" alink = "darkgreen"> */}
                    <p>????????????</p>
                    {/* </body> */}
                  </DdTextFirst>
                  <DdText>
                    <p>????????????</p>
                  </DdText>
                  <DdText>
                    <p>????????????????????????</p>
                  </DdText>
                  <DdText>
                    <p>?????????????????????</p>
                  </DdText>
                  <DdText>
                    <p>????????? ????????? CAMP</p>
                  </DdText>
                </DivDd>
                <AddrInfo>
                  <FcName>????????????(???)</FcName>
                  <CallCont>
                    ??????????????? ERICA ?????????????????? (????????????????????? 5???)
                  </CallCont>
                  <CallCont>
                    ?????? : ????????? ??????????????????????????? : ?????????
                    hajoon0516@naver.com
                  </CallCont>
                  <CallCont>
                    ????????????????????? : 229-81-37000 ????????????????????? : ???
                    2005-02682???
                    <p>????????? ????????????</p>
                  </CallCont>
                  <CallCont>
                    Copyright ??? YES24 Corp. All Rights Reserved.
                  </CallCont>
                </AddrInfo>
              </InfoDd>
            </InfoDl>
          </FooterArea>
          <FooterCall>
            <FooterCallCont>
              <CallContTxt>?????????? ??????????????? ??????</CallContTxt>
              <p>
                <InquiryLink>1:1?????? ??????</InquiryLink>
              </p>
            </FooterCallCont>
            <TopAreaShow>
              <TopButton onClick={() => window.scrollTo(0, 0)}>
                ??????????????? ??????
              </TopButton>
            </TopAreaShow>
          </FooterCall>
        </FooterInner>
      </FooterCont>
    </>
  );
};

const TopButton = styled(Button)`
  && {
    min-width: 38px;
    height: 30px;
    font-size: 0;
    background: url(//movie-img.yes24.com/NYes24/new/all_sprite.png) no-repeat -240px
      0;
  }
`;

export default Footer;
