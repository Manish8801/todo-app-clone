import { HiOutlinePencil } from "react-icons/hi2";
import useDialogsContext from "../../../../contexts/useDialogsContext";

const SelectTagColorButton = () => {
  const { toggleIsSelectTagColorInputOpen } = useDialogsContext();
  const handleButtonClick = () => {
    toggleIsSelectTagColorInputOpen();
  };
  return (
    <button
      className="pencil text-sm duration-200 text-gray-400 group-hover:opacity-100 opacity-0 hover:text-blue px-2"
      onClick={handleButtonClick}
    >
      <HiOutlinePencil />
    </button>
  );
};

export default SelectTagColorButton;
