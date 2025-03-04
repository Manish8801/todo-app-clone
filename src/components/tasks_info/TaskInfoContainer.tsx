import { LuTarget } from "react-icons/lu";
import { LuBell } from "react-icons/lu";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineHashtag } from "react-icons/hi";
import { GoArchive } from "react-icons/go";
import { FormEvent, useRef } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import useMyListsContext from "../../contexts/useMyListsContext";
import useDialogsContext from "../../contexts/useDialogsContext";

const TaskInfoContainer = () => {
  const { todos, selectedTodo, handleTaskComplete, activeList } = useMyListsContext();
  const { toggleIsChangeListNameInputOpen, toggleIsSelectTagColorInputOpen } =
    useDialogsContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      const event = new Event("click", { cancelable: true, bubbles: true });
      fileInputRef.current.dispatchEvent(event);
    }
  };
  const handleFormSubmit = (e:FormEvent) => {
    e.preventDefault()
  }

  if (selectedTodo !== undefined && selectedTodo.listName === activeList) {
    const { id } = selectedTodo;
    return (
      <div className="custom-scroll select-none overflow-y-auto selected-task-info flex flex-col bg-black rounded-2xl min-w-94 w-[35vw] h-[85vh] mx-4 gap-5 py-4 px-6">
        <div className="flex-center-between p-1 font-semibold text-grey">
          <div className="group relative cursor-pointer ">
            <div className="flex-center-center gap-0.5 text-xs">
              <span>{todos[id].listName}</span>
              <span>&gt;</span>
              <span>{todos[id].priority}</span>
            </div>
            <div className=" top-1/2 group-hover:opacity-100 opacity-0 bg-grey h-[1px]"></div>
          </div>
          <div className="flex-center-center w-fit gap-5">
            <button
              className="cursor-pointer flex-center-center gap-1 hover:text-blue duration-150  text-xs font-bold"
              onClick={() => handleTaskComplete(id, !todos[id].isCompleted)}
            >
              {todos[id].isCompleted && (
                <div className="text-blue text-lg">
                  <GoCheckCircleFill />
                </div>
              )}
              Mark as complete
            </button>

            <div className="cursor-pointer hover:text-blue duration-150  text-xl">
              <LuTarget />
            </div>
            <div className="cursor-pointer hover:text-blue duration-150  text-xl">
              <GoArchive />
            </div>
          </div>
        </div>
        <div className="relative">
          {todos[id].isCompleted && (
            <div className="absolute h-full w-full"></div>
          )}
          <div
            className={`${
              todos[id].isCompleted ? "text-disabled-text" : "text-white"
            } w-full px-2 pt-4 mb-8 text-2xl font-bold leading-6 text-wrap`}
          >
            {todos[id].description}
          </div>
          <div className="inline-flex gap-4 mb-8">
            <button
              disabled={todos[id].isCompleted}
              className={`${
                todos[id].isCompleted
                  ? "text-disabled-text"
                  : "hover:-translate-y-0.5 text-white bg-light-black duration-200"
              } text-nowrap outline-none px-3 py-2  text-sm font-semibold items-center inline-flex gap-2 rounded-full`}
            >
              <div
                className={`"text-xl ${
                  todos[id].isCompleted
                    ? "text-disabled-text"
                    : "text-[#ff6168]"
                }`}
              >
                <LuBell />
              </div>
              Remind me
            </button>
            <button
              disabled={todos[id].isCompleted}
              className={`${
                todos[id].isCompleted
                  ? "text-disabled-text"
                  : "hover:-translate-y-0.5 text-white bg-light-black duration-200"
              } text-nowrap outline-none px-3 py-2 text-sm font-semibold items-center inline-flex gap-2 rounded-full`}
              onClick={() => toggleIsChangeListNameInputOpen()}
            >
              <div
                className={`"text-xl ${
                  todos[id].isCompleted
                    ? "text-disabled-text"
                    : "text-[#f5a623]"
                }`}
              >
                <RiFileList2Line />
              </div>
              {selectedTodo.listName}
            </button>
            <button
              disabled={todos[id].isCompleted}
              className={`${
                todos[id].isCompleted
                  ? "text-disabled-text"
                  : "hover:-translate-y-0.5 text-white bg-light-black duration-200"
              } text-nowrap outline-none px-3 py-2 text-sm font-semibold items-center inline-flex gap-2 rounded-full`}
              onClick={() => toggleIsSelectTagColorInputOpen()}
            >
              <div
                className={`text-xl ${
                  todos[id].isCompleted ? "text-disabled-text" : "text-blue"
                }`}
              >
                <HiOutlineHashtag />
              </div>
              Tags
            </button>
          </div>
          <div className="text-grey">
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
              <div>
                <div
                  className={`text-xs font-semibold tracking-wider mb-1.5 ${
                    todos[id].isCompleted ? "text-disabled-text" : "text-white"
                  }`}
                >
                  NOTES
                </div>
                <input
                  readOnly={todos[id].isCompleted}
                  type="text"
                  className={`outline-none placeholder:font-semibold ${
                    todos[id].isCompleted ? "placeholder:text-[#2e2e2e]" : ""
                  } mb-2`}
                  placeholder="Insert your notes here"
                />
              </div>
                <div
                  className={`text-xs font-semibold tracking-wider ${
                    todos[id].isCompleted ? "text-disabled-text" : "text-white"
                  }`}
                >
                  ATTACHMENTS
                </div>

              <input
                disabled={todos[id].isCompleted}
                className="hidden"
                type="file"
                id="attachments"
                name="attachments"
                ref={fileInputRef}
              />
              <div
                className={`select-none rounded-lg border-dashed border-[1px]  p-2  ${
                  todos[id].isCompleted
                    ? "border-[#2e2e2e] text-[#2e2e2e] "
                    : "border-grey hover:border-blue hover:text-blue duration-200 cursor-pointer"
                } text-center`}
                onClick={handleFileInputClick}
              >
                Click to add / drop your files here
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default TaskInfoContainer;
