import { BsFillCheckSquareFill } from "react-icons/bs";
import useDialogsContext from "../../contexts/useDialogsContext";
import { FormEvent, useState } from "react";
import "./SelectTagColorInput.css";
import { v4 as uuidv4 } from "uuid";
import useMyListsContext from "../../contexts/useMyListsContext";
const SelectTagColorInput = () => {
  const [value, setValue] = useState<string>("");
  const { selectedTodo, handlePriorityChange, tags, selectTag } =
    useMyListsContext();
  const { toggleIsSelectTagColorInputOpen } = useDialogsContext();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    selectTag(value);
    if (selectedTodo) {
      handlePriorityChange(selectedTodo.id, value);
      setValue("");
    }

    toggleIsSelectTagColorInputOpen();
  };
  return (
    <div
      className="dialogs-container flex-center-center"
      onFocus={(e) => {
        if (e.target === e.currentTarget) {
          toggleIsSelectTagColorInputOpen();
        }
      }}
      tabIndex={0}
    >
      <div
        className="select-none flex flex-col bg-light-black h-fit max-h-[70vh] w-[380px] rounded-2xl "
        tabIndex={0}
      >
        <div className="text-center text-white text-lg font-semibold tracking-wider p-4 ">
          Tags
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-1  justify-between flex-col "
        >
          <div className="custom-scroll flex-1 flex-col overflow-y-auto px-0.5">
            {tags.map(({ tagName, tagColor }) => {
              return (
                <label
                  key={uuidv4()}
                  className={`flex-center-start cursor-pointer gap-4 p-[18.5px] text-white font-semibold`}
                  style={{ backgroundColor: tagColor }}
                  htmlFor={tagName}
                >
                  <input
                    onChange={(e) => setValue(e.target.value)}
                    type="radio"
                    name="tagColor"
                    id={tagName}
                    value={tagName}
                  />
                  <div className="custom-radio-btn">
                    <div
                      className={`check-icon-btn ${
                        value === tagName ? "selected" : ""
                      }`}
                    >
                      <BsFillCheckSquareFill />
                    </div>
                  </div>
                  {tagName}
                </label>
              );
            })}
          </div>
          <div className="flex-center-center font-semibold">
            <button
              type="reset"
              className="text-white w-full py-5 hover:bg-[rgba(255,255,255,.2)] rounded-bl-2xl duration-100"
              onClick={toggleIsSelectTagColorInputOpen}
            >
              Cancel
            </button>
            <div className="w-[1px] bg-white h-6"></div>
            <button
              className="text-blue w-full py-5 hover:bg-[rgba(255,255,255,.2)] rounded-br-2xl duration-100"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelectTagColorInput;
