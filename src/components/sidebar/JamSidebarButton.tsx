import { BsPinAngle } from "react-icons/bs";
import useSidebarContext from "./sidebar_context/useSidebarContext";

const JamSidebarButton = () => {
  const { isSidebarJammed, toggleIsSidebarJammed } = useSidebarContext();
  const handleButtonClick = () => {
    toggleIsSidebarJammed();
  };
  return (
    <button
      className={`rounded-full ${
        isSidebarJammed ? "opacity-0 group-hover:opacity-100 text-blue" : ""
      } hover:bg-grey hover:text-blue text-grey duration-200  p-1.5`}
      onClick={handleButtonClick}
    >
      <BsPinAngle />
    </button>
  );
};

export default JamSidebarButton;
