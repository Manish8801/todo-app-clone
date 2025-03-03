import { FiLock } from "react-icons/fi";
import useSidebarContext from "../../sidebar_context/useSidebarContext";

const MyListsDropdownButton = () => {
  const { toggleIsMyListsOpen } = useSidebarContext();
  const handleButtonClick = () => {
    toggleIsMyListsOpen();
  };
  return (
    <button
      className="text-nowrap flex-1 pl-6 py-2.5"
      onClick={handleButtonClick}
    >
      <div className="flex-center-start gap-3">
        <div className="text-white font-bold text-xl">My lists</div>
        <div className="text-sm text-gray-400">
          <FiLock />
        </div>
      </div>
    </button>
  );
};

export default MyListsDropdownButton;
