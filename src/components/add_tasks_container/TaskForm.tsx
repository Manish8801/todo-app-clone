import {
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import "./TaskForm.css";
import { LuPlus } from "react-icons/lu";
import { IoArrowUp } from "react-icons/io5";
import useMyListsContext from "../../contexts/useMyListsContext";
import OptionsWhenAdding from "./OptionsWhenAdding";

const submitForm = (e: HTMLFormElement): void => {
  const submitEvent = new Event("submit", {
    bubbles: true,
    cancelable: true,
  });
  e.dispatchEvent(submitEvent);
  e.focus();
};

const TaskForm = () => {
  const [value, setValue] = useState<string>("");
  const [isTextareaFocused, setIsTextareaFocused] = useState<boolean>(false);
  const { handleTaskAdd, selectedTag } = useMyListsContext();
  const [animateTextarea, setAnimateTextarea] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const focusOnTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };
  useEffect(() => {
    if (animateTextarea) {
      if (textareaRef.current) {
        let timerId = setTimeout(() => {
          textareaRef.current?.classList.remove("roll-up");
          setAnimateTextarea(false);
        }, 300);
        textareaRef.current.classList.add("roll-up");

        return () => {
          clearTimeout(timerId);
        };
      }
    }
  }, [animateTextarea]);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "100%";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [value]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value.trimStart());
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!!value) {
      handleTaskAdd(
        value,
        selectedTag === "" ? selectedTag : selectedTag.tagName
      );
      setValue("");
      e.currentTarget.reset();
      setAnimateTextarea(true);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (formRef.current) {
        submitForm(formRef.current);
      }
    } else return;
  };

  return (
    <div className="relative bottom-0 rounded-b-2xl w-full bg-light-black flex">
      <OptionsWhenAdding
        isTextareaFocused={isTextareaFocused}
        focusOnTextarea={focusOnTextarea}
      />
      <div
        className="z-[1] bg-light-black w-full p-4 order-2 rounded-b-2xl peer group"
        tabIndex={0}
      >
        <form
          onSubmit={(e) => handleFormSubmit(e)}
          className="flex w-full h-fit bg-third-black border-[1px] border-grey hover:border-blue rounded-lg duration-200 ease-in overflow-hidden"
          ref={formRef}
        >
          <textarea
            id="taskInput"
            name="taskInput"
            className="flex-1 py-2 group-focus-within:pl-3 scroll-auto caret-blue order-2 resize-none placeholder-grey text-white font-semibold outline-none"
            placeholder="Add task"
            rows={1}
            value={value}
            onChange={(e) => handleInputChange(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            onFocus={() => setIsTextareaFocused(true)}
            onBlur={() => setIsTextareaFocused(false)}
          ></textarea>
          <div className="p-2 text-grey text-xl group-focus-within:hidden flex items-center justify-center">
            <LuPlus />
          </div>
          <div
            className={`order-3 w-10 pl-1 flex items-center justify-start ${
              !!value ? "text-blue" : "text-grey"
            }`}
          >
            <button
              type="submit"
              className="outline-none text-xl hidden group-focus-within:block"
            >
              <IoArrowUp />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
