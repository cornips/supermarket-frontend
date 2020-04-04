import React from "react";

import {
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  IconLeft,
  IconRight
} from "./Button.style";

export const ButtonGroup = props => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
};

export const Button = props => {
  const ButtonVariant =
    props.color === "secondary" ? SecondaryButton : PrimaryButton;
  const iconLeftSrc = props["icon-left"] || props.icon;
  const iconLeft = iconLeftSrc ? (
    <IconLeft {...props}>
      <img src={iconLeftSrc} alt="" />
    </IconLeft>
  ) : (
    ""
  );
  const iconRight = props["icon-right"] ? (
    <IconRight {...props}>
      <img src={props["icon-right"]} alt="" />
    </IconRight>
  ) : (
    ""
  );

  return (
    <ButtonVariant type="button" {...props}>
      {iconLeft}
      {props.children}
      {iconRight}
    </ButtonVariant>
  );
};

export default Button;
