import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";
import EventPoster from "Components/EventPoster";
import { BorderBottom } from "@material-ui/icons";
// import { Tab } from '@mui/material-ui/core/Tab';
import EventData from "EventData";
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';


const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 70px;
  background-color: white;
  flex-direction: column;
`;

const EventBanner = styled.div`
  width: 100%;
  height: 420px;
  background-color: #6185CF;
  /* flex-direction: column; */
`;

const Event_image = styled.div`
  width : 1200px;
  height : 420px;
  display: block;
  margin: auto; 
  ::after{
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.3));
  }
`;

const EventInner = styled.div`
  padding: 0 0 120px;
  margin: 0 105px 0 105px;
  width: 1200px;
  margin:auto;
`;

const EventTab = styled.div`
  height : 138px;
  padding-top: 60px;
`;
const TabMenu = styled.ul`
  display: table;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 70px;
  position: relative;
  /* list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px; */
`;

const TabBoxContainer = styled.li`
  width: 300px;
  height: 77.76px;
  padding-top: 30px;
  display: table-cell;
  text-align: center;
  padding-bottom:2px;
  border-bottom:1px solid #b4b4b4;
 
`;

const TabBoxContainerActive = styled.li`
  width: 300px;
  height: 77.76px;
  padding-top: 30px;
  display: table-cell;
  text-align: center;
  padding-bottom:2px;
  border-bottom: 3px solid #2b2b2b;
 
`;

const TabBox = styled(Button)`
  && {
    padding-bottom: 28px;
    display: inline-block;
    vertical-align: top;
    font-size: 17px;
  }
`;

const AllEventList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width : 1200px;
  margin-top: 60px;
  gap: 15px;
  position: relative;
  *{        //*??? ?????? - ??? ????????? ???????????? ?????? ??? ????????? ????????? ?????????
    box-sizing: border-box;
  }
`;
const EventLinkBox = styled.div`
    position: relative;
    margin: 0 0 10px 10px;
    display: flex;
    width: 100%;
`;

// const EventBox = styled.div`
//   /* position: absolute; */
//   width: 380px;
//   height: 263.89px;
//   padding : 40px 40px 0;
//   /* padding-top: 40px;
//   padding-right: 40px;
//   padding-left: 40px; */
//   background-color: darkgrey;
//   &:hover {
//     opacity: 0.75;
//   }

// `;



const Event = () => {
  const [tabClick, setTabClick] = useState(0);



  // window.test = event;


  return (
    <>
      <Container>
        {/* {test.map(())} */}
        <EventBanner>
          <Event_image>
            <a>
              <img src="https://movie-simg.yes24.com/NYes24//MgrMain//20/06/evthd_attend_090339.png"></img>
            </a>
          </Event_image>
        </EventBanner>
        <EventInner>
          <EventTab>
            {/*
            {[0,1,2,3].map((i)=>{
              return(
                <TabBoxContainer>
                  <TabBox>
                    test
                  </TabBox>
                </TabBoxContainer>
              );
            })}
          */}
            <TabMenu>
              {tabClick === 0 ? (
                <TabBoxContainerActive>
                  <TabBox onClick={() => {
                    setTabClick(0)
                  }}> ?????? </TabBox>
                </TabBoxContainerActive>
              ) : (
                  <TabBoxContainer>
                    <TabBox onClick={() => {
                      setTabClick(0)
                    }}> ?????? </TabBox>
                  </TabBoxContainer>
                )}
              {tabClick === 1 ? (
                <TabBoxContainerActive>
                  <TabBox onClick={() => {
                    setTabClick(10)
                  }}> ????????? </TabBox>
                </TabBoxContainerActive>
              ) : (
                  <TabBoxContainer>
                    <TabBox onClick={() => {
                      setTabClick(1)
                    }}> ????????? </TabBox>
                  </TabBoxContainer>
                )}
              {tabClick === 2 ? (
                <TabBoxContainerActive>
                  <TabBox onClick={() => {
                    setTabClick(2)
                  }}> ????????? </TabBox>
                </TabBoxContainerActive>
              ) : (
                  <TabBoxContainer>
                    <TabBox onClick={() => {
                      setTabClick(2)
                    }}> ????????? </TabBox>
                  </TabBoxContainer>
                )}
              {/* {tabClick === 3 ? (
                <TabBoxContainerActive>
                       <TabBox onClick={() => {
                      setTabClick(3)
                    }}> ??????????????? </TabBox>
                  <a href="https://movie.yes24.com/Event/Winner" target="_blank">
                    ???????????????
                  </a>
                </TabBoxContainerActive>
              ) : (
                  <TabBoxContainer>
                    <TabBox onClick={() => {
                      <a href="https://movie.yes24.com/Event/Winner" target="_blank">
                        <TabBox> ??????????????? </TabBox>
                      </a>

                    }}> ??????????????? </TabBox>
                  </TabBoxContainer>
                )} */}

              {/* 
              <TabBoxContainer>
                <TabBox onClick={() => { setTabClick(1) }}> ????????? </TabBox>
              </TabBoxContainer>
              <TabBoxContainer>
                <TabBox onClick={() => { setTabClick(2) }}> ????????? </TabBox>
              </TabBoxContainer>
              <TabBoxContainer>
                <a href="https://movie.yes24.com/Event/Winner" target="_blank">
                  <TabBox> ??????????????? </TabBox>
                </a>
              </TabBoxContainer> */}
            </TabMenu>
          </EventTab>
          <TabContent tabClick={tabClick} />

          {/* <AllEventList>
            {[1, 2].map((i)=>{
              return(
              <EventLinkBox>
                <EventBox>
                  <EventPoster></EventPoster>
                  <p>?????????</p>
                </EventBox>
              </EventLinkBox>
              );
            })}
          </AllEventList> */}
        </EventInner>
      </Container>
    </>
  );
};

const TabContent = (props) => {

  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios.get("http://dbzara.kro.kr:8000/api/v1/event/") //api???????????? ????????????
      .then((res) => {
        console.log(res.data.results)//??????????????? ????????? ??????????????? res?????? ????????? ???????????? ?????? useState??? ??????
        setEvent(res.data.results);
      }

      )
      .catch((err) => console.log(err)) //err????????? ?????? ?????????
  }, [])
  const tab = ['??????', '?????????', '?????????'];

  return (
    !event[0] ? (<div style={{ minHeight: "20vh" }}><CircularProgress style={{
      color: "secondary", position: "absolute", top: "65%", left: "50%", margin: "-150px 0 0 - 150px"
    }} /></div>) : (
        tab.map((data, idx) => {
          if (props.tabClick === idx) { // tabclikc??? 0,1,2,3 idx ??? const tab??? idx
            if (props.tabClick === 0) {
              return (
                <AllEventList>
                  {
                    event.map((res, index) => {
                      return (
                        <EventLinkBox>
                          <EventPoster
                            src={res.backdrop}
                            id={res.id}
                            day={res.remain_date}
                            title={res.title}
                          />
                          {/* {console.log(res)} */}
                        </EventLinkBox>
                      )
                    })
                  }
                </AllEventList >
              );
            }
            else if (props.tabClick === 1) {
              return (
                <NoneEvent>???????????? ???????????? ????????????.</NoneEvent>
              )
            }
            else if (props.tabClick === 2) {
              return (
                <AllEventList>
                  {
                    event.map((res, index) => {
                      return (
                        <EventLinkBox>
                          <EventPoster
                            src={res.backdrop}
                            id={res.id}
                            day={res.remain_date}
                            title={res.title}
                          />
                          {/* {console.log(res)} */}
                        </EventLinkBox>
                      )
                    })
                  }
                </AllEventList >
              );
            }
          }
        })
      )
  );

  // if (props.tabClick === 0) {
  //   return (
  //     <AllEventList>
  //       {EventData.map(event => {

  //       })}
  //     </AllEventList>
  //   );
  // } else if (props.tabClick === 1) {
  //   return (
  //     <AllEventList>

  //       {/* {EventData.map((i)=>{
  //         return(
  //         <EventLinkBox>
  //             <EventPoster><p>????????? image ????????????</p></EventPoster>
  //         </EventLinkBox>
  //         );
  //       })} */}
  //     </AllEventList>
  //   );
  // } else if (props.tabClick === 2) {
  //   return (
  //     <AllEventList>
  //       {[1, 2, 3].map((i) => {
  //         return (
  //           <EventLinkBox>
  //             <EventPoster id={i}></EventPoster>
  //           </EventLinkBox>
  //         );
  //       })}
  //     </AllEventList>
  //   );
  // } else if (props.tabClick === 3) {
  //   return <div> 3 </div>;
  // }
};

const NoneEvent = styled.div`
  color: #2b2b2b;
  text-align: center;
  font-size: 15px;
  padding-top: 100px;
`;

export default Event;
