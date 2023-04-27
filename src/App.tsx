import Header from "./components/Header";
import styled from "styled-components";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MyGlobalStyle, myTheme } from "./style";
import { ThemeProvider } from "styled-components";
import EditPost from "./views/EditPost";
import Post from "./views/Post";
import Test from "./views/Test";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./modules/isLoggedin";
import { RootState } from "./modules";
import useTokenChecker from "./hooks/useTokenChecker";
import PrivateRoute from "./routes/PrivateRoutes";
import Private from "./views/Private";

function App() {
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
            <Route path="/edit" element={<EditPost />} />
            <Route path="/post" element={<Post />} />
            <Route path="/test" element={<Test />} />
            <Route path="/mypage" element={<>My Page</>} />
            <Route element={<PrivateRoute />}>
              <Route path="/private" element={<Private />} />
            </Route>
          </Routes>
        </Body>
      </ThemeProvider>
    </div>
  );
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
