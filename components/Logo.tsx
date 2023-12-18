import React from "react";

interface Props {
  title?: string;
  className?: string;
}

const Logo = ({ title, className }: Props) => {
  return (
    <>
      <div className={`font-bold text-4xl ${className}`}>{title}</div>
    </>
  );
};

export default Logo;
