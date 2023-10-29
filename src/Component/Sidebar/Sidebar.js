import "./Sidebar.css"

const Sidebar = (props) => {
  const onClose = (e) => {
    props.onOpen(false);
    e.preventDefault();
    return;
  };

  return (
    <div className="w3-sidebar w3-bar-block w3-card sidebar-component w3-pale-blue w3-text-green">
      <button className="w3-bar-item w3-btn w3-small w3-right w3-text-black" onClick={onClose}>
        <i className="fa fa-close" />
      </button>
      {props.children}
    </div>
  );
};

export default Sidebar;
