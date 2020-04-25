import React from "react";

export default function Image({ id, src, alt, className }) {
  return (
    <div className={className}>
      <img id={id} src={src} alt={alt} />
    </div>
  );
}
