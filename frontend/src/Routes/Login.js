import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Dialog from '@material-ui/core/Dialog';
import { socialAPI } from "junsu-api";
import { UserContext } from "context";

const LoginModal = styled.div`
  margin: 30px;
  display: flex;
`;

const Login = () => {
  const [open, setOpen] = useState(false);





  const onFailure = (response) => {
    console.log(response);
  };



  return (
    <>


    </>
  );
};

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