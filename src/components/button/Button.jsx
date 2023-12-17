import React from "react";

const Button = ({
  butoonText,
  fontSize,
  fontWeight,
  paddingX,
  paddingY,
  border,
  borderRadius,
  shadow,
  background,
  width,
  height,
  fontColor,
  onClickFunction
}) => {
  return (
    <button
      className={`${fontSize} ${fontWeight} ${paddingX} ${paddingY} ${border} ${borderRadius} ${shadow} ${background} ${width} ${height} ${fontColor}  `} onClick={onClickFunction}
    >
      {butoonText}
    </button>
  );
};

export default Button;
