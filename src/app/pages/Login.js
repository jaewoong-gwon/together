import React from "react";
import { Box, Container } from "@mui/material/";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import { IconButton, Button, Typography, Link } from "@mui/material";
import { OutlinedInput, FormControl, InputAdornment, InputLabel } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import kakaoLogin from "../assets/kakao_login_medium_wide.png";
import googleLogin from "../assets/btn_google_signin_light_normal_web.png";
import naverLogin from "../assets/btnG_완성형.png";

import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    id: "",
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
  const loginInfo = {
    id : values.id,
    password : values.password
  }
  axios.get('api/Login',{
      params: {
          loginInfo : loginInfo
      }
  }).then((response)=>{
      console.log(response.data);

  }).catch((error) => {
      console.log(error.response);
  })
  };

  const handleSnsLogin = (event) => {
        const snsName = event.currentTarget.id;
            axios.get(`api/login/${snsName}`)
                .then((response) =>{
                    console.log(response);
                    //controller로 선언하여, 단일 파라미터를 받아 파라미터에 따라 하나의 서비스에서 다른 요청을 보냄.
                    //요청 처리가 끝나면 View 리턴? -> redirect 해주는 방식.
                    //응답이 성공으로 오면 세션?쿠키?정보 저장 후 home 으로 이동 redirect?
                }).catch((error)=>{
                    //응답 실패는 오류 처리로 해결. 응답 실패 -> sns 연동 실패만 처리
                    //내부 db 연동 등 backend 에서 처리할 껀 frontend 로 넘기지 않는다.
                })
  };


  const lists = [
    { id: 1, title: "아이디 찾기", url: "#" },
    { id: 2, title: "비밀번호 찾기", url: "#" },
    { id: 3, title: "회원가입", url: "./SignUp" },
  ];

  const ulStyle = {
    listStyle: "none",
  };

  const liStyle = {
    float: "left",
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h5">로그인</Typography>
        <Box sx={{ m: "auto" }}>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="id">아이디(이메일)</InputLabel>
            <OutlinedInput
              id="id"
              value={values.id}
              onChange={handleChange("id")}
              label="아이디(이메일)"
            />
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="password">비밀번호</InputLabel>
            <OutlinedInput
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="비밀번호"
            />
          </FormControl>
          <FormControl fullWidth margin="normal" sx={{ mb: 3 }}>
            <Button type="submit" variant="contained" onClick={handleSubmit}>
              로그인
            </Button>
          </FormControl>
          <Box>
            <ul style={ulStyle}>
              {lists.map((list) => (
                <li key={list.id} style={liStyle}>
                  <Link href={list.url} underline="none" sx={{ mr: 1, ml: 1 }}>
                    {list.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderTop: 1,
            mt: 1,
          }}
        >
          <Typography variant="h5" sx={{ mt: 3 }}>
            SNS 로그인
          </Typography>
          <Button sx={{ mt: 3 }}
                  href="https://kauth.kakao.com/oauth/authorize?client_id=7aa17da574d10f129f263936b389747e&redirect_uri=http://localhost:8080/oauth2/kakao&response_type=code">
            <img src={kakaoLogin} />
          </Button>
          <Button sx={{ mt: 3 }} href="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=profile%20email&access_type=offline&state=state_parameter_passthrough_value&redirect_uri=http://localhost:8080/login/oauth2/code/google&client_id=812440292846-dojq800gmset5ro180rm4gaj13ml0rpf.apps.googleusercontent.com">
            <img src={googleLogin} />
          </Button>
          <Button sx={{ mt: 3, width:'90%'}} id="naver" onClick={handleSnsLogin}>
            <img src={naverLogin} style={{ width : '50%'}} />
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
