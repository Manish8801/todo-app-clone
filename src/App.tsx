import bgImage from "./assets/images/bg-image.png";
import "./App.css";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import AddTaskContainer from "./components/add_tasks_container/AddTaskContainer";
import TaskInfoContainer from "./components/tasks_info/TaskInfoContainer";

const App = () => {
  return (
    <div
      className="app w-screen h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <SidebarContainer />
      <AddTaskContainer/>
      <TaskInfoContainer/>
      <DialogsContainer />
    </div>
  );
};

export default App;
