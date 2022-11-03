import React from "react";
import Modal from "../Modal/Modal";

const AddBookModal = ({ children, ...props }) => {
  return <Modal {...props}>{children}</Modal>;
};

export default AddBookModal;
