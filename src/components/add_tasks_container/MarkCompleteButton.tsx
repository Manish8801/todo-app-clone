import { IoIosCheckmarkCircle } from "react-icons/io";
import useMyListsContext from "../../contexts/useMyListsContext";

type MarkCompleteButtonProps = {
  id: number;
  isCompleted: boolean;
};
const MarkCompleteButton = ({ id, isCompleted }: MarkCompleteButtonProps) => {
  const { handleTaskComplete } = useMyListsContext();

  const handleButtonClick = () => {
    handleTaskComplete(id, !isCompleted);
  };

  return (
    <button
      className={`w-5 h-5 rounded-full relative overflow-hidden ${
        isCompleted
          ? "border-[rgba(255,255,255,.15)] group-hover:border-[rgba(255,255,255,.05)]"
          : "border-grey"
      } border-[1px] hover:border-blue cursor-pointer`}
      onClick={handleButtonClick}
    >
      <div
        className={`h-full top-1/2 left-1/2 w-full rounded-full text-2xl absolute ${
          isCompleted ? "scale-105" : "scale-0"
        } -translate-x-1/2 -translate-y-1/2 duration-200 ease-out`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-1/2 text-[rgba(0,0,0,.55)] bg-grey hover:text-blue hover:bg-black rounded-full">
          <IoIosCheckmarkCircle />
        </div>
      </div>
    </button>
  );
};

export default MarkCompleteButton;
