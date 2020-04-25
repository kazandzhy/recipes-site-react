import React from "react";

export default function Input({
  type,
  id,
  placeholder,
  onChange,
  value,
  name,
  required
}) {
  return (
    <input
      type={type}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      name={name}
      required={required}
    />
  );
}
