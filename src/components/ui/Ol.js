import React from "react";

export default function Ol({ children, headText }) {
  return (
    <div>
      <h3>{headText}</h3>
      <ol>{children}</ol>
    </div>
  );
}
