import { createGlobalStyle, DefaultTheme } from "styled-components";
import "./App.css";

export interface Icolor {
  bg200: string;
  bg150: string;
  bg100: string;
}

interface Theme {
  color: Icolor;
}

const color = {
  bg200: "#D0B495",
  bg150: "#E9D5B4",
  bg100: "#E6E2D6",
};

export const theme = {
  color,
};

export const myTheme: DefaultTheme = {
  color,
};

export const MyGlobalStyle = createGlobalStyle<{ theme: Theme }>`
    body{
        font-family: 'Nanum Gothic', sans-serif;
        background-color: ${(props) => props.theme.color?.bg100}
    }
`;
