import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <React.Fragment>
      <Toolbar
        sx={{ borderBottom: 1, borderColor: "divider", position: "relative", height: "5vh" }}
      >
        <Box sx={{ display: "inline-block", position: "absolute", left: 0 }}>
          <Button size="small" color="inherit" href="/">
            <Typography variant="h5">Together</Typography>
          </Button>
          <Button
            size="small"
            color="inherit"
            href="https://www.1365.go.kr/vols/main.do"
            target="_blank"
          >
            <Typography variant="button">1365 자원봉사포털</Typography>
          </Button>
          <Button size="small" color="inherit" href="https://www.vms.or.kr/" target="_blank">
            <Typography variant="button">VMS 포털</Typography>
          </Button>
        </Box>
        <Box sx={{ display: "block", position: "absolute", right: "0" }}>
          <Button size="small" color="inherit" href="/Login">
            <Typography>로그인</Typography>
          </Button>
          <Button size="small" color="inherit" href="/SignUp">
            <Typography>회원가입</Typography>
          </Button>
          <Button size="small" color="inherit" href="/Fqa">
            <Typography>FQA</Typography>
          </Button>
        </Box>
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
