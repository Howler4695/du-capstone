import React from "react";

const AddBookModal = ({ children, ...props }) => {
  return <Modal {...props}>{children}</Modal>;
};

export default AddBookModal;
