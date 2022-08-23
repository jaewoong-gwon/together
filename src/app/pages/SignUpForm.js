import React from "react";
import { OutlinedInput, FormControl, InputAdornment, InputLabel } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, Button, Typography, Link } from "@mui/material";
import { useState } from "react";

function SignUpForm() {
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
  return (
    <React.Fragment>
      <FormControl fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor="id">아이디(이메일)</InputLabel>
        <OutlinedInput label="아이디(이메일)" />
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
      <InputLabel htmlFor="passwordCheck">비밀번호 확인</InputLabel>
      <OutlinedInput />
      <FormControl></FormControl>
    </React.Fragment>
  );
}

export default SignUpForm;
