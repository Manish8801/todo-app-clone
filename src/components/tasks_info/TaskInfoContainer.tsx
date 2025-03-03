import { LuTarget } from "react-icons/lu";
import { LuBell } from "react-icons/lu";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineHashtag } from "react-icons/hi";
import { GoArchive } from "react-icons/go";
import { useRef } from "react";
import useMyListsContext from "../../contexts/useMyListsContext";
import useDialogsContext from "../../contexts/useDialogsContext";

const TaskInfoContainer = () => {
  const { selectedTodo  } = useMyListsContext();
  const { toggleIsChangeListNameInputOpen, toggleIsSelectTagColorInputOpen } =
    useDialogsContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      const event = new Event("click", { cancelable: true, bubbles: true });
      fileInputRef.current.dispatchEvent(event);
    }
  };
  if (selectedTodo) {
    console.log(selectedTodo);
    return (
      <div className="custom-scroll select-none overflow-y-auto selected-task-info flex flex-col bg-black rounded-2xl min-w-94 w-[35vw] h-[85vh] mx-4 gap-5 py-4 px-6">
        <div className="flex-center-between p-1 font-semibold text-grey">
          <div className="group relative cursor-pointer ">
            <div className="flex-center-center gap-0.5 text-xs">
              <span>{selectedTodo.listName}</span>
              <span>&gt;</span>
              <span>{selectedTodo.priority}</span>
            </div>
            <div className=" top-1/2 group-hover:opacity-100 opacity-0 bg-grey h-[1px]"></div>
          </div>
          <div className="flex-center-center w-fit gap-5">
            <div className="cursor-pointer hover:text-blue duration-150  text-xs font-bold">
              Mark as complete
            </div>

            <div className="cursor-pointer hover:text-blue duration-150  text-xl">
              <LuTarget />
            </div>
            <div className="cursor-pointer hover:text-blue duration-150  text-xl">
              <GoArchive />
            </div>
          </div>
        </div>
        <div className="text-white w-full px-2 py-4 text-2xl font-bold leading-6 text-wrap">
          {selectedTodo.description}
        </div>
        <div className="inline-flex gap-4">
          <button className="hover:-translate-y-0.5 text-nowrap duration-200 outline-none cursor-pointer px-3 py-2 text-white text-sm font-semibold items-center inline-flex gap-2 bg-light-black rounded-full">
            <div className="text-xl text-[#ff6168]">
              <LuBell />
            </div>
            Remind me
          </button>
          <button
            className="hover:-translate-y-0.5 text-nowrap duration-200 outline-none  cursor-pointer px-3 py-2 text-white text-sm font-semibold items-center inline-flex gap-2 bg-light-black rounded-full"
            onClick={() => toggleIsChangeListNameInputOpen()}
          >
            <div className="text-xl text-[#f5a623]">
              <RiFileList2Line />
            </div>
            {selectedTodo.listName}
          </button>
          <button
            className="hover:-translate-y-0.5 text-nowrap duration-200 outline-none cursor-pointer  px-3 py-2 text-white text-sm font-semibold items-center inline-flex gap-2 bg-light-black rounded-full"
            onClick={() => toggleIsSelectTagColorInputOpen()}
          >
            <div className="text-xl text-blue">
              <HiOutlineHashtag />
            </div>
            Tags
          </button>
        </div>
        <div className="text-grey">
          <form className="flex flex-col gap-5">
            <div>
              <div className="text-xs font-semibold tracking-wider mb-1.5">
                NOTES
              </div>
              <input
                type="text"
                className="outline-none placeholder:font-semibold caret-blue "
                placeholder="Insert your notes here"
              />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-wider ">
                ATTACHMENTS
              </div>
            </div>
            <input
              className="hidden"
              type="file"
              id="attachments"
              name="attachments"
              ref={fileInputRef}
            />
            <div
              className="select-none rounded-lg border-dashed border-[1px] border-grey p-2 duration-200 hover:border-blue hover:text-blue text-center"
              onClick={handleFileInputClick}
            >
              Click to add / drop your files here
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default TaskInfoContainer;
