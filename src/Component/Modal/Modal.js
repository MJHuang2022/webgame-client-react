import { useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const MODAL_CLOSE_BUTTON = "-modal-close-button";
const MODAL_OPEN_BUTTON = "-modal-open-button";

export const closeModal = (modalId) => {
  const elementId = `${modalId}${MODAL_CLOSE_BUTTON}`;
  const closeElement = document.getElementById(elementId);
  if (!closeElement) {
    return;
  }

  closeElement.click();
};

export const triggerModal = (modalId) => {
  const elementId = `${modalId}${MODAL_OPEN_BUTTON}`;
  const openElement = document.getElementById(elementId);
  if (!openElement) {
    return;
  }

  openElement.click();
}

const Modal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const modalOnClickFunc = (e) => {
    e.preventDefault();
    setShowModal(false);
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div>
      <button
        id={`${props.modalId}${MODAL_OPEN_BUTTON}`}
        className={`w3-btn ${props.buttonClass}`}
        onClick={() => setShowModal(true)}
      >
        {props.buttonText}
      </button>

      {showModal &&
        createPortal(
          <div className="w3-card-4 " id={props.modalId}>
            <div className="w3-modal w3-show">
              <div className="w3-modal-content ">
                <div className="w3-container w3-border-black modal-component">
                  <button
                    className="w3-btn w3-display-topright "
                    id={`${props.modalId}${MODAL_CLOSE_BUTTON}`}
                    onClick={modalOnClickFunc}
                  >
                    <i className="fa fa-close w3-small" />
                  </button>
                  {props.children}
                </div>
              </div>
            </div>
          </div>,
          document.getElementById("main-container")
        )}
    </div>
  );
};

export default Modal;
