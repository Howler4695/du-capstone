import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import styled from "@emotion/styled";

const StyledModal = styled.div`
  width: 500px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
`;

const StyledContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .input {
    margin-bottom: 20px;
  }

  .inputArea {
    resize: vertical;
    max-height: 100px;
    min-height: 15px;
  }
`;

const StyledFooter = styled.div``;

const Modal = ({
  title,
  text,
  inputAreas = { title, inputType },
  ...props
}) => {
  return (
    <StyledModal {...props}>
      <text id="modal-title">{title}</text>
      <StyledContent>
        {text ? (
          <text>{text}poop</text>
        ) : (
          inputAreas &&
          inputAreas.map((inputArea) => {
            return (
              <>
                <text>{inputArea.title}</text>
                {inputArea.inputType !== "textarea" ? (
                  <input className="input" />
                ) : (
                  <textarea className="input inputArea" />
                )}
              </>
            );
          })
        )}
      </StyledContent>
      {!text && inputAreas && (
        <StyledFooter>
          <Button>Cancel</Button>
          <Button>Add A Book</Button>
        </StyledFooter>
      )}
    </StyledModal>
  );
};

export default Modal;

// export default class Modal extends React.Component {
//   onClose = e => {
//     this.props.onClose && this.props.onClose(e);
//   };
//   render() {
//     if (!this.props.show) {
//       return null;
//     }
//     return (
//       <div class="modal" id="modal">
//         <h2>Modal Window</h2>
//         <div class="content">{this.props.children}</div>
//         <div class="actions">
//           <button class="toggle-button" onClick={this.onClose}>
//             close
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
