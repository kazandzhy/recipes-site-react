import React from "react";

export default function Button({ id, text, type, onClick, className }) {
  return (
    <button id={id} type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
}
