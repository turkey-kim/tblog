import { createGlobalStyle, DefaultTheme } from "styled-components";
import "./App.css";

export interface Icolor {
  bg50: string;
  bg100: string;
  bg150: string;
  bg200: string;
  dark100: string;
  dark150: string;
  dark200: string;
  white: string;
  black: string;
  green: string;
}

export interface IfontSize {
  small: string;
  mediumSmall: string;
  medium: string;
  large: string;
  extraLarge: string;
}

interface Theme {
  color: Icolor;
  fontSize: IfontSize;
}

const color = {
  bg50: "#F8F9FA",
  bg100: "#F3F3F3",
  bg150: "#E4E4E4",
  bg200: "#C4C4C4",
  dark100: "#585858",
  dark150: "#404040",
  dark200: "#333333",
  white: "#FFFFFF",
  black: "#262626",
  green: "#4ef037",
};

const fontSize = {
  small: "5px",
  mediumSmall: "10px",
  medium: "15px",
  large: "20px",
  extraLarge: "25px",
};

const device = {
  tablet: `screen and (max-width: 990px)`,
  mobile: `screen and (max-width: 450px)`,
};

export const theme = {
  color,
  fontSize,
  device,
};

export const myTheme: DefaultTheme = {
  color,
  fontSize,
  device,
};

export const MyGlobalStyle = createGlobalStyle<{ theme: Theme }>`
    body{
        font-family: 'Nanum Gothic', sans-serif;
        background-color: ${(props) => props.theme.color?.bg50};
        font-size : ${(props) => props.theme.fontSize?.medium};
        color : ${(props) => props.theme.color?.black};
        
    }
`;
