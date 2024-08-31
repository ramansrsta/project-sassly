import React from "react";

export type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  height?: string;
  alignSelf?: string;
  width?: string;
  flex?: string;
  minWidth?: string;
};

const Button: React.FC<ButtonProps> = ({
  className = "",
  children,
  height,
  alignSelf,
  width,
  flex,
  minWidth,
}) => {
  const buttonStyles = {
    height,
    alignSelf,
    width,
    flex,
    minWidth,
  };

  return (
    <button
      className={`
        h-[54px] w-[151px] z-[1]
        bg-gradient-to-r from-[#6a36ff] to-[#ac5fe6]
        text-white text-base
        border border-[#6a36ff] rounded-[10px]
        hover:bg-gradient-to-r hover:from-[#5a26ef] hover:to-[#9c4fd6]
        transition-all duration-300 ease-in-out
        ${className}
      `}
      style={buttonStyles}
    >
      {children}
    </button>
  );
};

export default Button;
