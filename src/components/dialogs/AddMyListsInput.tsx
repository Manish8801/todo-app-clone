import { FormEvent, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import useMyListsContext from "../../contexts/useMyListsContext";
import useDialogsContext from "../../contexts/useDialogsContext";

const AddMyListsInput = () => {
  const { addMyLists } = useMyListsContext();
  const { toggleIsAddMyListsInputOpen } = useDialogsContext();
  const [value, setValue] = useState<string>("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    addMyLists(value);
    setValue("");
  };

  return (
    <div
      className="dialogs-container flex-center-center"
      tabIndex={0}
      onFocus={(e) => {
        if (e.target === e.currentTarget) {
          toggleIsAddMyListsInputOpen();
        }
      }}
    >
      <div className="bg-black p-2 w-[616px] rounded-xl relative" tabIndex={0}>
        <button
          className="absolute top-[10%] right-[5%] text-lg text-white"
          onClick={toggleIsAddMyListsInputOpen}
        >
          <RxCross2 />
        </button>
        <form
          onSubmit={handleFormSubmit}
          className="pt-[72px] px-4 pb-6 flex items-end flex-col gap-[50px]"
        >
          <input
            autoFocus
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add a list title"
            className="w-full select-none font-bold tracking-wide placeholder:white caret-blue outline-none placeholder:font-bold text-3xl text-white "
          />
          <button
            disabled={!value}
            type="submit"
            className="relative cursor-pointer w-fit h-fit overflow-hidden px-8 py-2 rounded-full bg-blue flex-center-center text-white font-bold text-sm tracking-wide"
          >
            <div
              className={`${
                value ? "hidden" : "block"
              } absolute bg-[rgba(0,0,0,.4)] w-full h-full`}
            ></div>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMyListsInput;
