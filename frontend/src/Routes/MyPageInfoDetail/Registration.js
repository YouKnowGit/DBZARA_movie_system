import { DomainDisabled } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";


const Cont = styled.div`
    padding-top: 60px;
    height: 2419px;
`;
const NoticeTxt = styled.p`
  padding-bottom: 20px;
  color: #2b2b2b;
  font-size: 15px;
`;
const RedBox = styled.div`
  margin: 20px 0 30px;
  height: 80px;
  font-size: 0;
  border: 3px solid #ec6159;
  background: #fff;
`;
const RedBoxTxt = styled.textarea`
  display: inline-block;
  width: calc(100% - 120px);
  height: 100%;
  font-size: 22px;
  font-weight: bold;
  color: #2b2b2b;
  text-align: center;
  vertical-align: top;
  border: none;
  resize: none;
`;
const RedBoxCont = styled.div`
  padding: 10px 10px 10px 10px;
  position: relative;
`;
const RedBtn = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 146px;
  font-size: 20px;
  color: #fff;
  background: #ec6159;
  cursor: pointer;
  border: none;
`;
const NoticeDetail = styled.li`
    position: relative;
    padding: 0 0 10px 10px;
    list-style: '-';
    text-align: left;
    color: #777;
    font-size: 15px;
    line-height: 1;
`;
const NoticeTitle = styled.p`
    padding: 80px 0 20px;
    font-size: 20px;
    color: #2b2b2b;
    text-align: left;
`;
const UserContArea = styled.div``;
const NoticeArea = styled.div`
    margin-top: 95px;
    border-top: 1px solid #e5e5e5;
`;
const TicketTable = styled.table`
  border: 1px solid #e5e5e5;
  display: grid;
  height: 112px;
  grid-template-columns: 110px 230px 230px 96px 392px 140px;
  grid-template-rows: repeat(2, 1fr);
  font-size: 13px;
  color: #2b2b2b;
  > th{
    :nth-child(-n+6){
      background: #e5e5e5;
    }
    background: #fff;
    padding-top : 17px;
  }
`;
const SalesTable = styled.table`
  border: 1px solid #e5e5e5;
  display: grid;
  height: 112px;
  grid-template-columns: 110px 230px 230px 90px 90px 308px 140px;
  grid-template-rows: repeat(2, 1fr);
  font-size: 13px;
  color: #2b2b2b;
`;




const Registration = ({ id }) => {
  return (
    <>
      <Cont>
        <NoticeTxt>
          ???????????? ?????????  '0' ???, ?????????  '1' ???  <span style={{ color: "#777" }}>(2021??? ????????? ?????????  '0' ???)</span>
        </NoticeTxt>
        {/* ????????? ?????? ?????? */}
        <RedBox>
          <RedBoxCont>
            <RedBoxTxt placeholder="????????? ????????? ??? ????????? ????????? ???????????????" />
            <RedBtn>??????</RedBtn>
          </RedBoxCont>
        </RedBox>
        <NoticeDetail>?????????/???????????? ????????? ??????????????? ???????????? ?????? ???????????????.</NoticeDetail>
        <NoticeDetail>?????????/????????? ?????? ??? ????????? ??????????????? ??????????????? ?????? ????????? ???????????????.</NoticeDetail>
        <NoticeDetail>???????????? ??? ???????????? ???????????? ????????? ?????? ??? ????????? ?????? ????????? ????????? ??????????????? ??????????????????.</NoticeDetail>
        <UserContArea>
          <NoticeTitle>?????????</NoticeTitle>
          <TicketTable>
            <th>??????</th>
            <th>????????? ??????</th>
            <th>????????????</th>
            <th>????????????/??????</th>
            <th>????????????</th>
            <th></th>
            <th > 1</th>
            <th > 2</th>
            <th > 2</th>
            <th > 2</th>
            <th > 2</th>
            <th > 2</th>
          </TicketTable>
          <NoticeDetail style={{ marginTop: "30px" }}>?????? ????????? ??????????????? 1?????? 24???(1??? 1??????)??? ???????????????. 24??? ?????? ??? ????????? ????????? ???????????????.</NoticeDetail>
          <NoticeDetail>????????? ????????? ???????????? ??? ???????????? 4???(1??? 1??????)????????? ????????? ???????????????.</NoticeDetail>
          <NoticeDetail>?????? ????????? ????????? ??????????????? 14,000??? ????????? ????????? ????????????. (?????? ?????? ?????? ??????)</NoticeDetail>
          <NoticeTitle>?????????</NoticeTitle>
          <SalesTable>
            <th style={{ background: "#e5e5e5", paddingTop: "17px" }}>??????</th>
            <th style={{ background: "#e5e5e5", paddingTop: "17px" }}>????????? ??????</th>
            <th style={{ background: "#e5e5e5", paddingTop: "17px" }}>????????????</th>
            <th style={{ background: "#e5e5e5", paddingTop: "17px" }}>????????????/??????</th>
            <th style={{ background: "#e5e5e5", paddingTop: "17px" }}>????????????</th>
            <th style={{ background: "#e5e5e5", paddingTop: "17px" }}>????????????</th>
            <th style={{ background: "#e5e5e5", paddingTop: "17px" }}></th>
            <th style={{ background: "#fff", paddingTop: "17px" }} >???????????????</th>
            <th style={{ background: "#fff", paddingTop: "17px" }} >SFZ38CM988AA229CK539</th>
            <th style={{ background: "#fff", paddingTop: "17px" }} >2021/11/29~2021/12/29</th>
            <th style={{ background: "#fff", paddingTop: "17px" }} >'1/1'</th>
            <th style={{ background: "#fff", paddingTop: "17px" }} >1,000???</th>
            <th style={{ background: "#fff", paddingTop: "17px" }} >11??? ???????????? ????????????(????????? ??????)</th>
            <th style={{ background: "#fff", paddingTop: "17px" }} > 2</th>
          </SalesTable>
        </UserContArea>
        <NoticeArea>
          <NoticeTitle>DBZARA ?????? ?????????/????????? ???????</NoticeTitle>
          <p style={{ paddingBottom: "20px", color: "#2b2b2b", fontWeight: "bold", fontSize: "15px" }}>?????????</p>
          <p style={{ marginBottom: "30px", color: "#777", fontSize: "15px", lineHeight: "24px" }}>
            ????????? ??? ????????? ?????? ????????? ???????????? ????????? ????????? ????????? ????????? ????????? ??? ?????? ?????? ??????????????????.<br></br>
          ???, ???????????? ????????? ?????? ??????????????? ??????????????? ???????????? ????????? ????????? ?????? ????????????.</p>
          <NoticeDetail style={{ fontSize: "15px" }}>???????????? ????????? : YES24?????? ?????? ????????? ?????? ????????? ????????? ?????? ?????? ??????</NoticeDetail>
          <NoticeDetail style={{ fontSize: "15px" }}>???????????? ????????? : ???????????? ????????? ????????? ?????? ??????</NoticeDetail>
          <NoticeDetail style={{ fontSize: "15px" }}>1+1????????? : 2??? ?????? ????????? 1??? ?????? ??????</NoticeDetail>
          <NoticeDetail style={{ fontSize: "15px", marginBottom: "10px" }}>?????? ????????? : ?????????, ?????????, ???????????? ????????? ??????????????? ?????? ??????</NoticeDetail>
          <p style={{ paddingBottom: "20px", color: "#2b2b2b", fontWeight: "bold", fontSize: "15px", marginTop: "40px" }}>?????????</p>
          <p style={{ marginBottom: "30px", color: "#777", fontSize: "15px", lineHeight: "24px" }}>
            ????????? ??? ????????? ?????? ????????? ???????????? ?????????, ????????? ???????????? ?????? ?????? ????????? ??? ?????? ??????????????????.<br></br>
          ?????????/???????????? ?????? ?????? ????????? ???????????? YES24??? ???????????? ????????????.</p>

          <NoticeTitle>?????????/????????? ??????</NoticeTitle>
          <NoticeDetail>YES24 ???????????????/???????????? ??? ????????? ?????? ???????????????.</NoticeDetail>
          <NoticeDetail>?????? ????????? ???????????????/???????????? ?????? ?????? ??? ?????? ID??? ????????? ??? ??? ????????????.</NoticeDetail>
          <NoticeDetail>????????? ???????????????/???????????? ????????? ?????? ?????? ID??? ????????????????????? ?????? ???????????????.</NoticeDetail>
          <NoticeDetail>?????? ?????? ?????????????????? ??? ID??? ?????? 4????????? ?????? ???????????????. (4????????? ??? ?????? ?????? ???????????? ????????? ????????????, ?????? ID??? ????????? ???????????? ????????? ????????? ?????????.)</NoticeDetail>
          <NoticeDetail>?????? ????????? ??????????????? 1?????? 24?????? ???????????????. 24??? ?????? ??? ????????? ????????? ???????????????.</NoticeDetail>
          <NoticeDetail>?????????????????? ????????? ?????? ?????????/????????? ?????? ??? ????????? ??????????????????.</NoticeDetail>

          <NoticeTitle>?????? ??? ?????? ??? ??????</NoticeTitle>
          <NoticeDetail>???????????????/???????????? ???????????? ???????????? ????????? ?????? ???????????? > ?????????/????????? ?????? ????????? ???????????? ??????????????? ????????????, ??????????????? ??????????????? ????????????.</NoticeDetail>
          <NoticeDetail>??????????????? ????????? ??????????????? 14,000??? ????????? ????????? ????????????. (????????? 3D?????????????????? ????????????, ?????? ????????? ?????? ????????? 14,000?????? ????????? ?????? ????????? ?????? ????????? ?????? ????????????)</NoticeDetail>
          <NoticeDetail>???????????????/????????? ??????????????? ??????????????? ???????????????, ????????? ?????? ?????? ?????? ?????? YES24 ???????????? ?????? ????????? ??????????????? ?????????. (??????, ??????, ??????, ?????? ??? ?????? ??? ????????? ?????? ???????????? ?????????, ????????? ?????? ??????)</NoticeDetail>
          <NoticeDetail>???????????????/???????????? ????????? ??????????????? ?????? ????????? ?????? ????????? ????????? ???????????????.(???????????? ?????????/????????? ???????????? ????????????, ???????????? ?????? ?????????????????? ?????????.)</NoticeDetail>
          <NoticeDetail>????????? ????????? ????????? ????????? ???????????????/????????? ?????? ????????? ?????????. ????????? ????????? ?????????????????? ???????????? ?????? ??????????????? ???????????? ??????????????? ????????? ?????????????????? ????????? ??? ????????????.</NoticeDetail>
          <NoticeDetail>?????????/???????????? YES24 ???????????? ????????? ????????? ???????????? ??? ??? ????????? ???????????????. (????????? ?????? ?????? ?????? ?????? ????????? ??????)</NoticeDetail>
          <NoticeDetail>?????????????????? ?????? ????????? 1?????? ?????? ???????????????. (???, ????????? ???????????? ?????????????????? ?????? ?????????????????? ?????? 2??? ?????? ????????? 2??? ?????? ????????? ???????????????.)</NoticeDetail>
          <NoticeDetail>???????????????/??????????????? ?????? ??? ???????????? ??????????????? ????????? ??????????????? ????????? ?????????.</NoticeDetail>

          <NoticeTitle>?????? ?????? ???</NoticeTitle>
          <NoticeDetail>???????????? ?????????, ???????????????/???????????? ?????? ?????????????????? ???????????????.</NoticeDetail>
          <NoticeDetail>???, ?????? ???????????? ????????? ???????????????/????????? ??????????????? ?????? ????????? ?????????????????? ???????????? ????????????. ?????????????????? ?????? ??????????????? ??? ????????? ????????? ????????????.</NoticeDetail>
          <NoticeDetail>?????????????????? ???????????????/??????????????? ????????? ????????? ????????? ??????, ?????? ????????? ????????? ?????? ????????? ????????? ???????????????.</NoticeDetail>
          <NoticeDetail>?????? ???????????? ???????????? ?????? ?????? ????????? ????????? ????????? ?????? ?????? ?????? ?????????. ???????????? ?????????/???????????? ????????? ??? ??? ?????? ???????????? ????????? ??????????????? ????????????.</NoticeDetail>
        </NoticeArea>
      </Cont>
    </>
  )
}

export default Registration;
