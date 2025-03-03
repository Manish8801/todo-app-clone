import bgImage from "./assets/images/bg-image.png";
import "./App.css";
import SidebarContainer from "./components/sidebar/SidebarContainer";
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center grid"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <SidebarContainer />
      <DialogsContainer />
    </div>
  );
};

export default App;
