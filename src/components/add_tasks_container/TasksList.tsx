import useMyListsContext from "../../contexts/useMyListsContext";
import TasksListItem from "./TasksListItem";
import "./TasksList.css";
const TasksList = () => {
  const { activeList, todos } = useMyListsContext();
  const listItems = todos.map((todo) => {
    if (todo.listName === activeList) {
      return <TasksListItem key={todo.id + todo.description} todo={todo} />;
    }
  });
  return (
    <div className="custom-scroll flex-1 overflow-y-auto p-2">
      <ul className="flex flex-col gap-1">{listItems.reverse()}</ul>
    </div>
  );
};

export default TasksList;
