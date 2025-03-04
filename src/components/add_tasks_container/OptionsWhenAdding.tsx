import { RiFileList2Line } from "react-icons/ri";
import { LuBell } from "react-icons/lu";
import { HiOutlineHashtag } from "react-icons/hi";
import { useState } from "react";
import PriorityInputWhenAdding from "./PriorityInputWhenAdding";
import useMyListsContext from "../../contexts/useMyListsContext";

const OptionsWhenAdding = ({
  isTextareaFocused,focusOnTextarea
}: {
  isTextareaFocused: boolean;focusOnTextarea : () => void;
}) => {
    const { selectedTag} = useMyListsContext()
  const [isPriorityInputOpen, setIsPriorityInputOpen] =
    useState<boolean>(false);
  const togglePriorityInputOpen = () => {
    setIsPriorityInputOpen(!isPriorityInputOpen);
  };

  return (
    <div>
      <div
        className={`pt-2 px-[8%] absolute bottom-0 left-0 order-1 bg-light-black w-full text-xl text-grey flex-center-between ${
          isTextareaFocused || isPriorityInputOpen
            ? " -translate-y-[100%]"
            : "translate-0"
        }
         delay-150 duration-300`}
      >
        <button className="outline-none py-4 px-8 hover:cursor-pointer hover:text-blue duration-200">
          <RiFileList2Line />
        </button>
        <div className="w-[1px] h-8 bg-grey"></div>
        <button className="outline-none py-4 px-8 hover:cursor-pointer hover:text-blue duration-200">
          <LuBell />
        </button>
        <div className="w-[1px] h-8 bg-grey"></div>
        <button
          className="outline-none py-4 px-8 hover:cursor-pointer hover:text-blue duration-200"
          onClick={togglePriorityInputOpen}
        >
         {selectedTag === "" ? <div> <HiOutlineHashtag /></div> : <div className="text-xs" style={{color : selectedTag.tagColor}}>#{selectedTag.tagName}</div>}

        </button>
      </div>
      <PriorityInputWhenAdding
        focusOnTextarea={focusOnTextarea}
        isPriorityInputOpen={isPriorityInputOpen}
        togglePriorityInputOpen={togglePriorityInputOpen}
      />
    </div>
  );
};

export default OptionsWhenAdding;
