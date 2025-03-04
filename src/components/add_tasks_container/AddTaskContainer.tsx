import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

const AddTaskContainer = () => {
  return (
    <div className="add-tasks-container bg-black min-w-96 w-[37vw] h-[85vh] rounded-2xl flex justify-between flex-col overflow-clip">
      <TasksList />
      <TaskForm/>
    </div>
  );
};

export default AddTaskContainer;
