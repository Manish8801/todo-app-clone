import { BsFillCheckSquareFill } from "react-icons/bs";
import useDialogsContext from "../../contexts/useDialogsContext";
import { FormEvent, useState } from "react";

const SelectTagColorInput = () => {
      const [value, setValue] = useState<string>("");

  const { toggleIsSelectTagColorInputOpen } = useDialogsContext();
  const handleFormSubmit = (e:FormEvent) => {
    e.preventDefault();
  }
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
      <div className="bg-black h-[70vh] w-[380px] rounded-2xl   " tabIndex={0}>
        <div className="text-center text-white text-lg font-semibold tracking-wider p-4 ">
          Tags
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="flex-1 flex justify-between flex-col"
        >
          <div className="flex flex-col">
            <label
              className="flex-center-start cursor-pointer gap-4 p-[18.5px] text-white font-semibold bg-[#F9D21F]"
              htmlFor="bg-[#F9D21F]"
            >
              <input
                onChange={(e) => setValue(e.target.value)}
                type="radio"
                name="tagColor"
                id="bg-[#F9D21F]"
                value="bg-[#F9D21F]"
              />
              <div className="custom-radio-btn">
                <div
                  className={`check-icon-btn ${
                    value === "bg-[#F9D21F]" ? "selected" : ""
                  }`}
                >
                  <BsFillCheckSquareFill />
                </div>
              </div>
              Priority
            </label>

            <label
              className="flex-center-start cursor-pointer gap-4 p-[18.5px] text-white font-semibold bg-[#FF3D56]"
              htmlFor="bg-[#FF3D56]"
            >
              <input
                onChange={(e) => setValue(e.target.value)}
                type="radio"
                name="tagColor"
                id="bg-[#FF3D56]"
                value="bg-[#FF3D56]"
              />
              <div className="custom-radio-btn">
                <div
                  className={`check-icon-btn ${
                    value === "bg-[#FF3D56]" ? "selected" : ""
                  }`}
                >
                  <BsFillCheckSquareFill />
                </div>
              </div>
              family
            </label>

            <label
              className="flex-center-start cursor-pointer gap-4 p-[18.5px] text-white font-semibold bg-[#FD7A4C]"
              htmlFor="bg-[#FD7A4C]"
            >
              <input
                onChange={(e) => setValue(e.target.value)}
                type="radio"
                name="tagColor"
                id="bg-[#FD7A4C]"
                value="bg-[#FD7A4C]"
              />
              <div className="custom-radio-btn">
                <div
                  className={`check-icon-btn ${
                    value === "bg-[#FD7A4C]" ? "selected" : ""
                  }`}
                >
                  <BsFillCheckSquareFill />
                </div>
              </div>
              deadline
            </label>

            <label
              className="flex-center-start cursor-pointer gap-4 p-[18.5px] text-white font-semibold bg-[#FF7A00]"
              htmlFor="bg-[#FF7A00]"
            >
              <input
                onChange={(e) => setValue(e.target.value)}
                type="radio"
                name="tagColor"
                id="bg-[#FF7A00]"
                value="bg-[#FF7A00]"
              />
              <div className="custom-radio-btn">
                <div
                  className={`check-icon-btn ${
                    value === "bg-[#FF7A00]" ? "selected" : ""
                  }`}
                >
                  <BsFillCheckSquareFill />
                </div>
              </div>
              nothing
            </label>

            <label
              className="flex-center-start cursor-pointer gap-4 p-[18.5px] text-white font-semibold bg-[#2FC24A]"
              htmlFor="bg-[#2FC24A]"
            >
              <input
                onChange={(e) => setValue(e.target.value)}
                type="radio"
                name="tagColor"
                id="bg-[#2FC24A]"
                value="bg-[#2FC24A]"
              />
              <div className="custom-radio-btn">
                <div
                  className={`check-icon-btn ${
                    value === "bg-[#2FC24A]" ? "selected" : ""
                  }`}
                >
                  <BsFillCheckSquareFill />
                </div>
              </div>
              science project
            </label>

            <label
              className="flex-center-start cursor-pointer gap-4 p-[18.5px] text-white font-semibold bg-[#5DDB6A]"
              htmlFor="bg-[#5DDB6A]"
            >
              <input
                onChange={(e) => setValue(e.target.value)}
                type="radio"
                name="tagColor"
                id="bg-[#5DDB6A]"
                value="bg-[#5DDB6A]"
              />
              <div className="custom-radio-btn">
                <div
                  className={`check-icon-btn ${
                    value === "bg-[#5DDB6A]" ? "selected" : ""
                  }`}
                >
                  <BsFillCheckSquareFill />
                </div>
              </div>
              important
            </label>
          </div>
          <div className="flex-center-center bottom-0 gap-18 p-4 font-semibold">
            <button
              type="reset"
              className="text-white"
              onClick={toggleIsSelectTagColorInputOpen}
            >
              Cancel
            </button>
            <div className="w-[1px] bg-white h-6"></div>
            <button className="text-primary-blue" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelectTagColorInput;
