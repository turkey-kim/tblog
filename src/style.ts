import { createGlobalStyle, DefaultTheme } from "styled-components";

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
  lightGreen: string;
  green: string;
}

export interface IfontSize {
  small: string;
  mediumSmall: string;
  medium: string;
  large: string;
  extraLarge: string;
}

export interface Ishadow {
  shadow1: string;
  shadow2: string;
  shadow3: string;
}

interface Theme {
  color: Icolor;
  fontSize: IfontSize;
  shadow: Ishadow;
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
  lightGreen: "#4ef037",
  green: "#00bd56",
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

const shadow = {
  shadow1: "0px 4px 8px rgba(0, 0, 0, 0.04)",
  shadow2: "0px 8px 16px rgba(0, 0, 0, 0.08)",
  shadow3: "0px 12px 40px rgba(0, 0, 0, 0.12)",
};

export const theme = {
  color,
  fontSize,
  device,
  shadow,
};

export const myTheme: DefaultTheme = {
  color,
  fontSize,
  device,
  shadow,
};

export const MyGlobalStyle = createGlobalStyle<{ theme: Theme }>`
    body{
        font-family: 'Nanum Gothic', sans-serif;
        background-color: ${(props) => props.theme.color?.bg50};
        font-size : ${(props) => props.theme.fontSize?.medium};
        color : ${(props) => props.theme.color?.black};
        box-shadow : ${(props) => props.theme.shadow?.shadow1}
        
    }
`;
