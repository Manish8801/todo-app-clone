import { FiPlus } from "react-icons/fi";

const AddIconButton = ({ onClick }: { onClick: () => void }) => {
  const handleButtonClick = () => {
    onClick();
  };
  return (
    <button
      className="py-2.5 pr-2.5 text-xl text-gray-400 hover:text-blue duration-150"
      onClick={handleButtonClick}
    >
      <FiPlus />
    </button>
  );
};

export default AddIconButton;
