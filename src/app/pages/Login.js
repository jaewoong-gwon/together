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
          <Button sx={{ mt: 3, width:'90%'}} id="NAVER" href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=j1ENGLwu3zQ82gDNyVpX&redirect_uri=http://localhost:80/login/oauth2/code/naver&state=state"  >
            <img src={naverLogin} style={{ width : '50%'}} />
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
