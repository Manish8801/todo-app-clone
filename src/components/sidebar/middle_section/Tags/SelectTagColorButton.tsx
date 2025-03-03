import { HiOutlinePencil } from "react-icons/hi2";

const SelectTagColorButton = () => {
  return (
    <button className="pencil text-sm duration-200 text-gray-400 group-hover:opacity-100 opacity-0 hover:text-blue px-2">
      <HiOutlinePencil />
    </button>
  );
};

export default SelectTagColorButton;
