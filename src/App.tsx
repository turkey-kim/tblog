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
import { useEffect } from "react";
import axios from "axios";
import Test from "./views/Test";

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
