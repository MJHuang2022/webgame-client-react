import Modal, { triggerModal } from "../Modal/Modal";

const getNotificationModalId = (action) => {
  return `${action}-notification`;
};

export const triggerNotification = (action) => {
  return triggerModal(getNotificationModalId(action));
};

const Notification = (props) => {
  return (
    <Modal
      modalId={getNotificationModalId(props.action)}
      buttonText="SignupSuccess"
      buttonClass="w3-bar-item w3-hide"
    >
      <div className="app-content-container">
        <div className="w3-card-4 w3-border">
          <div className="w3-container w3-teal">
            <p className="w3-center w3-xlarge">{props.title}</p>
          </div>
        </div>
        <div className="w3-container w3-light-gray">
          <p className="w3-large w3-center w3-text-blue">{props.children}</p>
        </div>
      </div>
    </Modal>
  );
};

export default Notification;
