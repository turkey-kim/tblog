import Header from "./components/Header";
import Login from "./pages/Login";
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
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
        <p>hello</p>
      </ThemeProvider>
    </div>
  );
}

export default App;
