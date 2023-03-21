import { createGlobalStyle, DefaultTheme } from "styled-components";
import "./App.css";

export interface Icolor {
  bg200: string;
  bg150: string;
  bg100: string;
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
  bg200: "#D0B495",
  bg150: "#E9D5B4",
  bg100: "#E6E2D6",
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
        background-color: ${(props) => props.theme.color?.bg100};
        font-size : ${(props) => props.theme.fontSize?.medium};
    }
`;
