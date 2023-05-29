import Header from "./components/Header";
import styled from "styled-components";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import MyPage from "./views/MyPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MyGlobalStyle, myTheme } from "./style";
import { ThemeProvider } from "styled-components";
import EditPost from "./views/EditPost";
import Post from "./views/Post";
import Test from "./views/Test";
import Writing from "./views/Writing";
import PrivateRoute from "./routes/PrivateRoutes";
import Private from "./views/Private";
import { useEffect } from "react";
import useTokenChecker from "./utils/hooks/useTokenChecker";
import { useDispatch } from "react-redux";
import { login, logout } from "./modules/isLoggedin";

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
    }
  }, [isTokenValid, isLoading]);

  return (
    <div className="App">
      <MyGlobalStyle theme={myTheme} />
      <ThemeProvider theme={myTheme}>
        <Header></Header>
        <Body>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/sign_up" element={<SignUp></SignUp>} />
            <Route path="/writing/:id" element={<Writing></Writing>} />
            <Route path="/test" element={<Test />} />
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
          </Routes>
        </Body>
      </ThemeProvider>
    </div>
  );
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export default App;
