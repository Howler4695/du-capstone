import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: purple;
  color: white;
  box-sizing: border-box;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
