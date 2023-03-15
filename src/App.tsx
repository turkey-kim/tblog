import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Test from "./pages/Test";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MyGlobalStyle, myTheme } from "./style";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <div className="App">
      <MyGlobalStyle theme={myTheme} />
      <ThemeProvider theme={myTheme}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/test" element={<Test></Test>}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
