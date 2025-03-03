import { GoX } from "react-icons/go";
import useMyListsContext from "../../contexts/useMyListsContext";

type DeleteTaskButtonProps = {
  id: number;
};
const DeleteTaskButton = ({ id }: DeleteTaskButtonProps) => {
  const { handleTaskDelete } = useMyListsContext();
  const handleButtonClick = () => {
    handleTaskDelete(id);
  };

  return (
    <button
      className="w-5 h-5 flex justify-center items-center text-lg font-extrabold bg-grey rounded-full active:bg-blue "
      onClick={handleButtonClick}
    >
      <div>
        <GoX />
      </div>
    </button>
  );
};

export default DeleteTaskButton;
