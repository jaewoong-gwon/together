import React from "react";
import { Box, Container, Paper, Stack, styled, Card, Link } from "@mui/material";
import Typography from "@mui/material/Typography";

function Mypage() {
  const items = [
    { id: 1, content: "평균 별점" },
    { id: 2, content: "총 봉사시간" },
    { id: 3, content: "포인트" },
  ];

  const list = [
    { id: 1, content: "나의 즐겨찾기", url: "#" },
    { id: 2, content: "리뷰 확인", url: "#" },
    { id: 3, content: "봉사 실적조회", url: "#" },
  ];
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    lineHeight: "100px",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    color: theme.palette.text.secondary,
  }));

  const List = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    lineHeight: "50px",
    width: "120px",
    height: "50px",
    color: theme.palette.text.secondary,
    borderRadius: 10,
  }));

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h5">마이페이지</Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          {items.map((item) => {
            return <Item key={item.id}>{item.content}</Item>;
          })}
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 5,
            width: "650px",
            height: "100px",
          }}
        >
          <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
            {list.map((list) => {
              return (
                <List key={list.id}>
                  <Link href={list.url} underline="hover" color="inherit">
                    {list.content}
                  </Link>
                </List>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Mypage;
