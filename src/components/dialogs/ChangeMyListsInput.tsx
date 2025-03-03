import { FiLock } from "react-icons/fi";
import useMyListsContext from "../../contexts/useMyListsContext";
import { GoCheckCircleFill } from "react-icons/go";
import useDialogsContext from "../../contexts/useDialogsContext";

const ChangeMyListsInput = () => {
  const { toggleIsChangeListNameInputOpen } = useDialogsContext();
  const { myLists, activeList, selectedTodo, handleListNameChange } =
    useMyListsContext();
  const handleButtonClick = (listName: string) => {
    if (selectedTodo !== undefined) {
      handleListNameChange(selectedTodo.id, listName);
      toggleIsChangeListNameInputOpen();
    }
  };
  return (
    <div
      className="dialogs-container flex-center-center"
      tabIndex={0}
      onFocus={(e) => {
        if (e.target === e.currentTarget) {
          toggleIsChangeListNameInputOpen();
        }
      }}
    >
      <div className="rounded-xl text-white overflow-hidden" tabIndex={0}>
        <header className="rounded-t-xl bg-light-black">
          <h2 className="py-5 text-center font-bold text-[19px]">Move to...</h2>
        </header>
        <div className="custom-scroll overflow-y-auto py-2 bg-black h-[264px] w-[398px]">
          <h3 className="inline-flex font-bold text-lg items-center gap-1 px-4 justify-start py-3">
            My Lists
            <div className="text-sm">
              <FiLock />
            </div>
          </h3>
          <ul className="flex-center-center flex-col ">
            {myLists.map((myList) => (
              <>
                <div className=" h-[.8px] bg-grey w-[90%]"></div>
                <li className="w-full relative">
                  <button
                    className="px-4 text-left w-full py-3 hover:bg-[rgba(255,255,255,0.1)] delay-0 duration-50 ease-in"
                    onClick={() => handleButtonClick(myList)}
                  >
                    {myList}
                  </button>
                  {activeList === myList && (
                    <div className="absolute right-5 top-4 text-green-400 text-2xl">
                      <GoCheckCircleFill />
                    </div>
                  )}
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChangeMyListsInput;
