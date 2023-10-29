import "./Confirm.css";

const Confirm = (props) => {
  const confirmFunc = (e) => {
    props.confirm(true);
    e.preventDefault();
  };

  const cancelFunc = (e) => {
    props.confirm(false);
    e.preventDefault();
  };

  return (
    <div className="w3-container w3-white w3-center confirm-component w3-border">
      <div className="w3-teal w3-padding-16">
        <p className="w3-text-white w3-xlarge w3-center w3-margin">
          {props.title}
        </p>
      </div>
      <div className="w3-padding">
        <p className="w3-large w3-center">{props.content}</p>
      </div>
      <div className="w3-lightgray w3-padding-16">
        <button
          className="w3-btn w3-round-xxlarge w3-teal confirm-button"
          onClick={confirmFunc}
        >
          Confirm
        </button>
        <button
          className="w3-btn w3-round-xxlarge w3-grey confirm-button"
          onClick={cancelFunc}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Confirm;