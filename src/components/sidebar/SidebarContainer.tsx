import useSidebarContext from "./sidebar_context/useSidebarContext";
import "./SidebarContainer.css";
import { useRef } from "react";
import Profile from "./profile/Profile";
import MiddleSectionContainer from "./middle_section/MiddleSectionContainer";
import Additional from "./additional/Additional";

const Sidebar = () => {
  const { isSidebarJammed } = useSidebarContext();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleSidebarHover = () => {
    if (isSidebarJammed) return;

    const timer = setTimeout(() => {
      if (sidebarRef.current) {
        sidebarRef.current.classList.add("sidebar-hovered");
      }
      return clearTimeout(timer);
    }, 300);
  };
  const handleSidebarOut = () => {
    if (isSidebarJammed) return;
    const timer = setTimeout(() => {
      if (sidebarRef.current) {
        sidebarRef.current.classList.remove("sidebar-hovered");
      }
      return clearTimeout(timer);
    }, 300);
  };

  return (
    <div
      className={`sidebar select-none w-20 overflow-hidden ${
        isSidebarJammed
          ? "jammed w-60 backdrop-blur-sm bg-[rgba(0,0,0,.6)]"
          : "hover:w-60 hover:backdrop-blur-sm hover:bg-[rgba(0,0,0,.6)]"
      } overflow-hidden flex flex-col `}
      onMouseOver={handleSidebarHover}
      onMouseOut={handleSidebarOut}
      ref={sidebarRef}
    >
      <Profile />
      <MiddleSectionContainer />
      <Additional />
    </div>
  );
};

export default Sidebar;
