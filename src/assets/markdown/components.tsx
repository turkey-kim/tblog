import React from "react";

interface Props {
  children: React.ReactNode & React.ReactNode[];
}

export const Blockquote: React.FC<Props> = ({ children }) => (
  <blockquote
    style={{
      backgroundColor: "#F3F3F3",
      borderLeft: `0.25rem solid green`,
      borderRadius: "0.15rem",
      paddingLeft: "1rem",
    }}
  >
    {children}
  </blockquote>
);

export const Code: React.FC<Props> = ({ children }) => (
  <pre
    style={{
      backgroundColor: "black",
      padding: "2rem",
      margin: "2rem",
      borderRadius: "0.15rem",
      fontWeight: 500,
      color: "green",
    }}
  >
    {children}
  </pre>
);

export const P: React.FC<Props> = ({ children }) => (
  <p
    style={{
      fontWeight: 500,
      lineHeight: 1.6,
    }}
  >
    {children}
  </p>
);

export const H1: React.FC<Props> = ({ children }) => (
  <div style={{ borderBottom: "solid 0.5px #585858" }}>
    <h1>{children}</h1>
  </div>
);

export const H2: React.FC<Props> = ({ children }) => (
  <div style={{ borderBottom: "solid 0.5px #585858" }}>
    <h2>{children}</h2>
  </div>
);
