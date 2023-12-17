import React from "react";

const LeftIconButton = ({
  butoonText,
  fontSize,
  fontColor,
  paddingX,
  paddingY,
  border,
  borderRadius,
  shadow,
  background,
  buttonIcon,
  marginRight,
}) => {
  return (
    <button
      className={` flex ${fontSize} ${paddingX} ${paddingY} ${border} ${borderRadius} ${shadow} ${background} ${marginRight} ${fontColor}`}
    >
      <img src={buttonIcon} alt="" className="mr-2 w-5 h-5" />
      {butoonText}
    </button>
  );
};

export default LeftIconButton;
