import Header from "./components/Header";
import styled from "styled-components";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Test from "./pages/Test";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MyGlobalStyle, myTheme } from "./style";
import { ThemeProvider } from "styled-components";
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";

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
            <Route path="/test" element={<Test></Test>} />
            <Route path="/edit" element={<EditPost />} />
            <Route path="/post" element={<Post />} />
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
