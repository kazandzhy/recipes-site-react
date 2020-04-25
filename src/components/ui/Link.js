import React from "react";

export default function Link({ target, rel, href, text }) {
  return (
    <a target={target} rel={rel} href={href}>
      {text}
    </a>
  );
}
