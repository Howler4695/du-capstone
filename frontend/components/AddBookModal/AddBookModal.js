import React from "react";
import Modal from "../Modal/Modal";

const inputAreas = [
  {
    title: "Title",
    inputType: "submit",
  },
  {
    title: "Author",
    inputType: "submit",
  },
  {
    title: "Description",
    inputType: "textarea",
  },
];

const AddBookModal = () => {
  return <Modal title="Add New Book" inputAreas={inputAreas}></Modal>;
};

export default AddBookModal;
