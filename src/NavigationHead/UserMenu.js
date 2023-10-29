import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarButton from "../Component/Sidebar/SidebarButton";
import Sidebar from "../Component/Sidebar/Sidebar";
import UserCard from "../User/UserCard";
import Signout from "../Auth/Signout";

const UserMenu = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const onOpenSidebar = useCallback((action) => {
    setIsSidebarOpened(action);
  }, []);

  const sidebarOnClick = () => {
    return onOpenSidebar(false);
  };

  return (
    <div className="w3-right w3-container">
      {!isSidebarOpened && (
        <SidebarButton onOpen={onOpenSidebar}>
          <i className="fa fa-user w3-xlarge w3-padding" />
        </SidebarButton>
      )}
      {isSidebarOpened && (
        <Sidebar onOpen={onOpenSidebar}>
          <NavLink
            className="w3-bar-item w3-btn"
            to="/user"
            onClick={sidebarOnClick}
          >
            <UserCard />
          </NavLink>
          <NavLink className="w3-bar-item w3-btn"
            to="/modifypwd"
            onClick={sidebarOnClick}
          >
            Modify Password
          </NavLink>
          <Signout onClick={sidebarOnClick} />
        </Sidebar>
      )}
    </div>
  );
};

export default UserMenu;
