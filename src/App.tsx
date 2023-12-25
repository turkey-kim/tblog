import { useState } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import MyPage from "./views/MyPage";
import { Route, Routes, Outlet } from "react-router-dom";
import { MyGlobalStyle, myTheme } from "./style";
import { ThemeProvider } from "styled-components";
import EditPost from "./views/EditPost";
import Post from "./views/Post";
import Test from "./views/Test";
import Writing from "./views/Writing";
import PrivateRoute from "./routes/PrivateRoutes";
import NotFound from "./views/NotFound";
import { useEffect } from "react";
import useTokenChecker from "./utils/hooks/useTokenChecker";
import { useDispatch } from "react-redux";
import { clearUserProfile } from "./modules/userProfile";
import { login, logout } from "./modules/isLoggedin";
import Button from "./components/Button";
import ChatAI from "./components/ChatAI";

function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <>
      <Header />
      <Outlet />
      <StyledChatWrapper className={isChatOpen ? "open" : ""}>
        <ChatAI />
      </StyledChatWrapper>
      <StyledWrapper>
        <Button
          text={isChatOpen ? "채팅닫기" : "AI와 채팅하기"}
          size="mediumLarge"
          color="green"
          onClick={() => {
            setIsChatOpen(!isChatOpen);
          }}
        />
      </StyledWrapper>
    </>
  );
}

function App() {
  let [isTokenValid, isLoading] = useTokenChecker();
  const dispatch = useDispatch();

  useEffect(() => {
    //자동로그아웃
    if (isLoading) {
    } else if (isTokenValid) {
      dispatch(login());
    } else {
      dispatch(logout());
      dispatch(clearUserProfile(null));
    }
  }, [isTokenValid, isLoading]);

  return (
    <div className="App">
      <MyGlobalStyle theme={myTheme} />
      <ThemeProvider theme={myTheme}>
        <Body>
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login></Login>} />
              <Route path="/sign_up" element={<SignUp></SignUp>} />
              <Route path="/writing/:id" element={<Writing></Writing>} />
              <Route path="/test" element={<Test />} />
              <Route path="/*" element={<NotFound></NotFound>} />

              <Route
                path="/mypage"
                element={
                  <PrivateRoute>
                    <MyPage></MyPage>
                  </PrivateRoute>
                }
              />
              <Route
                path="post"
                element={
                  <PrivateRoute>
                    <Post></Post>
                  </PrivateRoute>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <PrivateRoute>
                    <EditPost></EditPost>
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Body>
      </ThemeProvider>
    </div>
  );
}

const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledChatWrapper = styled.div`
  position: fixed;
  left: -110%;
  bottom: 0%;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.bg50};
  transition: 0.8s ease;
  z-index: 10;

  &.open {
    left: 0;
    bottom: 0;
    transition: 0.8s ease;
  }
`;

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  z-index: 100;
`;

export default App;
