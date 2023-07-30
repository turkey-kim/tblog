import React from "react";

interface BlockquoteProps {
  children: React.ReactNode & React.ReactNode[];
}

export const Blockquote: React.FC<BlockquoteProps> = ({ children }) => (
  <blockquote
    style={{
      backgroundColor: "#F3F3F3",
      borderLeft: "0.25rem solid #4ef037",
      borderRadius: "0.15rem",
      paddingLeft: "1rem",
    }}
  >
    {children}
  </blockquote>
);

interface CodeProps {
  children: React.ReactNode & React.ReactNode[];
}

export const Code: React.FC<CodeProps> = ({ children }) => (
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

interface PProps {
  children: React.ReactNode & React.ReactNode[];
}

export const P: React.FC<PProps> = ({ children }) => (
  <p
    style={{
      fontWeight: 500,
      lineHeight: 1.6,
    }}
  >
    {children}
  </p>
);
