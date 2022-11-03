import React from "react";
import Flex from "../Flex/Flex";
import styled from "@emotion/styled";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;

const Footer = ({ text, ...props }) => {
  return (
    <StyledFooter {...props}>
      <text style={{ fontFamily: "poppins", color: "white" }}>{text}</text>
    </StyledFooter>
  );
};

export default Footer;
