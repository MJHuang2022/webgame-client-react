import Modal, {triggerModal} from "../Modal/Modal";

const getErrorModalId = (action) => {
  return `${action}-error`;
}

export const triggerErrorAlert = (action) => {
  return triggerModal(getErrorModalId(action));
}

const ErrorAlert = (props) => {
  return (
    <Modal
      modalId={getErrorModalId(props.action)}
      buttonText="errorAlert"
      buttonClass="w3-bar-item w3-hide"
    >
      <div className="app-content-container">
        <div className="w3-card-4 w3-border">
          <div className="w3-container w3-red">
            <p className="w3-xlarge w3-center">{props.action} Error</p>
          </div>
          <div className="w3-container w3-light-gray">
            <p className="w3-large w3-center">{props.error}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorAlert;
