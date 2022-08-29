import React from "react";
import { Grid, Container, Paper } from "@mui/material";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Post from "./components/Post";
import Mypage from "./pages/MyPage";
import MainBanner from "./components/MainBanner";
import mainBanner1 from "./assets/testImage1.jpg";
import mainBanner2 from "./assets/testImage2.jpg";
import mainBanner3 from "./assets/testImage3.jpg";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Join from "./pages/Join";
import Write from "./pages/Write";

const navList = [
  { id: 1, title: "봉사안내", url: "#" },
  { id: 2, title: "봉사참여", url: "/Join" },
  { id: 3, title: "봉사정보", url: "#" },
  { id: 4, title: "고객센터", url: "#" },
  { id: 5, title: "나의자원봉사", url: "/myPage" },
];

const mainBannerList = [
  { id: 1, url: mainBanner1 },
  { id: 2, url: mainBanner2 },
  { id: 3, url: mainBanner3 },
];

const Posts = [
  {
    title: "공지사항",
    date: "22.07.14",
    description: "공지사항...",
  },
  {
    title: "지역센터 행사정보",
    date: "22.07.14",
    description: "행사정보...",
  },
  {
    title: "자원봉사 이야기",
    date: "22.07.14",
    description: "자원봉사 이야기...",
  },
  {
    title: "자주하는 질문",
    date: "22.07.14",
    description: "자주하는 질문...",
  },
];

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Header />
        <Nav sections={navList} />
        <main>
          <Route exact path="/">
            <MainBanner post={mainBannerList} />
            <Grid container spacing={1}>
              {Posts.map((post) => {
                return <Post key={post.title} post={post} />;
              })}
            </Grid>
          </Route>
          <Route path="/myPage">
            <Mypage />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/Join">
            <Join/>
           </Route>
           <Route path="/Write">
            <Write/>
           </Route>
        </main>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
