import React from "react";

export default function Image({ id, src, alt, className, onLoad, style }) {
  return (
    <div className={className}>
      <img id={id} src={src} alt={alt} onLoad={onLoad} style={style} />
    </div>
  );
}
