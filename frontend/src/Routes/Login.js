// import React, { useContext, useEffect } from "react";
// import styled from "styled-components";
// import {
//   Button,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   Paper,
// } from "@material-ui/core";
// import { UserContext } from "context";
// import GoogleLogin from "react-google-login";
// import KakaoLogin from "react-kakao-login";
// import { socialAPI } from "junsu-api";
// import setCookie from "cookie";

// // !로그인 연동
// const Login = () => {
//   const { userInfo, handleUserInfo } = useContext(UserContext);
//   console.log(userInfo);

// const responseGoogle = async (response) => {
//   const { profileObj } = response;
//   const dbzaraToken = await socialAPI.googleLogin(profileObj);
//   console.log("구글", dbzaraToken);
//   console.log("구글token", dbzaraToken.data.token);
//   handleUserInfo(dbzaraToken.data.token);
//   // setCookie("dbzaraToken", dbzaraToken.data.token, {
//   //   path: "/",
//   //   secure: true,
//   //   sameSite: "none",
//   // });
//   // setCookie("googleToken", google.data.token);
// };
// const onSuccess = async (response) => {
//   const { profile } = response;
//   // const data = await socialAPI.kakaoLogin(profile);
//   const dbzaraToken = await socialAPI.kakaoLogin(profile);
//   console.log("카카오", dbzaraToken);
//   console.log("카카오token", dbzaraToken.data.token);
//   handleUserInfo(dbzaraToken.data.token);
//   // setCookie("dbzaraToken", dbzaraToken.data.token, {
//   //   path: "/",
//   //   secure: true,
//   //   sameSite: "none",
//   // });
//   // setCookie("kakaoToken", kakao.data.token);
// };
// const onFailure = (response) => {
//   console.log(response);
// };

// useEffect(() => {
//   if (window.Kakao !== undefined) {
//     window.Kakao.init(process.env.REACT_APP_KAKAO_LOGIN_API);
//   }
// }, []);

//   return (
//     <Container>
//       {console.log(userInfo)}
//       <LoginView>
// <GoogleLogin
//   clientId={process.env.REACT_APP_GOOGLE_LOGIN_ID}
//   buttonText="Google Login"
//   onSuccess={responseGoogle}
//   onFailure={responseGoogle}
//   cookiePolicy={"single_host_origin"}
// />
// <KakaoLogin
//   token={process.env.REACT_APP_KAKAO_LOGIN_API}
//   onSuccess={onSuccess}
//   onFail={onFailure}
// ></KakaoLogin>
//         <Info>
//           <Accordion>
//             <UserSummary>
//               <Typography>UserInfo</Typography>
//             </UserSummary>
//             <UserDetails>
//               {/* <Data>{`name : ${userInfo.username}`}</Data>
//               <Data>{`password : ${userInfo.password}`}</Data> */}
//               <Data>
//                 {/* {token ? `token : ${userInfo.token.substring(0, 18)}...` : error} */}
//               </Data>
//             </UserDetails>
//           </Accordion>
//         </Info>
//       </LoginView>
//     </Container>
//   );
// };

// export default Login;

// const Container = styled.div`
//   margin-top: 50px;
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const LoginView = styled.div`
//   margin-top: 20px;
//   margin: 10px;
//   width: 50%;
//   height: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #66a6ff;
// `;

// const Info = styled.ul`
//   background-color: #293672;
//   margin: 10px 0 0 10px;
// `;

// const UserSummary = styled(AccordionSummary)``;
// const UserDetails = styled(AccordionDetails)`
//   display: flex;
//   flex-direction: column;
//   background-color: #89f7fe;
// `;
// const Data = styled.li`
//   font-size: 15px;
// `;



import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog';
import GoogleLogin from "react-google-login";
import KakaoLogin from "react-kakao-login";
import { socialAPI } from "junsu-api";
import { UserContext } from "context";



const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2b2b2b;
`;
const LoginView = styled.div`
   margin-top: 20px;
   margin: 10px;
   width: 50%;
   height: 50%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #66a6ff;
`;
const LoginText = styled.div`
  width: 120px;
  height: 30px;
  text-align: center;
  border: 3px solid #333;
  cursor: pointer;
  background: #3b3b;
  color: #333;
  font-size: 20px;
`;
const LoginModal = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;



const Login = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { userInfo, handleUserInfo } = useContext(UserContext);

  const responseGoogle = async (response) => {
    const { profileObj } = response;
    const dbzaraToken = await socialAPI.googleLogin(profileObj);
    handleUserInfo(dbzaraToken.data.token);
  };
  const onSuccess = async (response) => {
    const { profile } = response;
    const dbzaraToken = await socialAPI.kakaoLogin(profile);
    handleUserInfo(dbzaraToken.data.token);
  };
  useEffect(() => {
    if (window.Kakao !== undefined) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_LOGIN_API);
    }
  }, []);


  const onFailure = (response) => {
    console.log(response);
  };



  return (
    <>
      <Container>
        <LoginView>
          <LoginText onClick={handleClickOpen}>login</LoginText>
        </LoginView>
      </Container>
      <div>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <LoginModal>
            <div>
              <div style={{ fontWeight: "bold" }}> LOGIN </div>
              <LoginButton>
                <img src="data:image/png;base64,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"
                  style={{ width: "45px", height: "45px" }} />
                <p style={{ margin: "5px 0 0 0" }}>구글로 로그인하기</p>
              </LoginButton>
              <LoginButton>
                <img src="data:image/png;base64,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"
                  style={{ width: "45px", height: "45px" }} />
                <p style={{ margin: "5px 0 0 0" }}>카카오로 로그인하기</p>
              </LoginButton>
            </div>
            {/* <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_LOGIN_ID}
              // buttonText="구글로 로그인하기"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            >
              <SnsLoginText >구글로 로그인하기</SnsLoginText>
            </GoogleLogin>
            <KakaoLogin
              Label="20%"
              token={process.env.REACT_APP_KAKAO_LOGIN_API}
              onSuccess={onSuccess}
              onFail={onFailure}
            >
              <SnsLoginText >카카오로 로그인하기</SnsLoginText>
            </KakaoLogin> */}
          </LoginModal>
        </Dialog>
      </div>
    </>
  );
};


const SnsLoginText = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

const LoginButton = styled.div`
display: flex;
  padding: 15px;
  /* background-color: red; */
  margin: 15px;
  border-radius: 5%;
  width: 350px;
  text-align: center;
  /* margin: 0 0 10px 0; */
`;

export default Login;