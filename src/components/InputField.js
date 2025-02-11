"use client";
import { InputContainerSvg } from "../styles/LoginStyles";
import Image from "next/image";

export default function InputField({
  type,
  placeholder,
  value,
  onChange,
  src,
  id,
}) {
  return (
    <InputContainerSvg>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <Image src={src} alt="" width={15} height={15} />
    </InputContainerSvg>
  );
}
