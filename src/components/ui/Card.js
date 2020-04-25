import React from "react";

export default function Card({
  headText,
  headSize,
  text,
  spanText,
  link,
  className,
}) {
  let header;

  if (headSize === "1") {
    header = <h1>{headText}</h1>;
  }

  if (headSize === "2") {
    header = <h2>{headText}</h2>;
  }

  return (
    <div className={className}>
      {header}
      <p>
        {text}
        <span> {spanText}</span>
        {"\n"}
        {link}
      </p>
    </div>
  );
}
