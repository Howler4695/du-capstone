import React from "react";
import Flex from "../Flex/Flex";

const Header = ({ children, ...props }) => {
  return <Flex {...props}>{children}</Flex>;
};

export default Header;
