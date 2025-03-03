import { useEffect, useRef } from "react";
import { TodoType } from "../../contexts/MyListsContext";
import DeleteTaskButton from "./DeleteTaskButton";
import MarkCompleteButton from "./MarkCompleteButton";
import ShowTaskMenu from "./ShowTaskMenu";
import useMyListsContext from "../../contexts/useMyListsContext";

const TasksListItem = ({ todo }: { todo: TodoType }) => {
  const { id, isCompleted, description } = todo;
  const { selectTodo } = useMyListsContext();
  const strikeThroughLineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (strikeThroughLineRef.current) {
      strikeThroughLineRef.current.animate(
        [
          { width: isCompleted ? "0" : "100%" },
          { width: isCompleted ? "100%" : 0 },
        ],
        {
          duration: 500,
          easing: "ease-out",
          fill: "forwards",
        }
      );
    }
  });
  return (
    <li
      className={`flex-center-between p-2 pr-3 cursor-pointer rounded-lg group  gap-3 ${
        isCompleted
          ? "focus:bg-[rgba(255,255,255,0.14)]"
          : "hover:bg-[rgba(255,255,255,.09)] focus:bg-[rgba(255,255,255,0.14)]"
      }`}
      tabIndex={0}
      onClick={() => selectTodo(id)}
    >
      <MarkCompleteButton id={id} isCompleted={isCompleted} />
      <div className="relative text-white flex-1 truncate">
        {description}
        <div className={`strike-through ${isCompleted ? "shown" : ""}`}></div>
        <div className={`absolute top-3/5 h-[1px] `}></div>
      </div>
      {isCompleted ? <DeleteTaskButton id={id} /> : <ShowTaskMenu />}
    </li>
  );
};

export default TasksListItem;
