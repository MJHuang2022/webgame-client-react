import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import Confirm from "../Component/Confirm/Confirm";
import Modal, { closeModal } from "../Component/Modal/Modal";

const Signout = (props) => {
  const authCtx = useContext(AuthContext);
  const modalId = "signout";

  const confirmFunction = (action) => {
    if (action) {
      authCtx.signout();
    }

    closeModal(modalId);
  };

  return (
    <Modal modalId={modalId} buttonText="Signout" buttonClass="w3-bar-item" onClick={props.onClick}>
      <Confirm
        title="Sign out of WebGame"
        content={`User: ${authCtx.user.email}`}
        confirm={confirmFunction}
      />
    </Modal>
  );
};

export default Signout;
