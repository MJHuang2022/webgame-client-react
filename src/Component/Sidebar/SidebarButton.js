const SidebarButton = (props) => {
  const onOpen = (e) => {
    props.onOpen(true);
    e.preventDefault();
    return;
  };
  
  return (
    <div className="w3-container">
      <button className="w3-btn w3-text-green" onClick={onOpen}>
        {props.children}
      </button>
    </div>
  );
};

export default SidebarButton;
