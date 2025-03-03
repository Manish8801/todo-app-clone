import useDialogsContext from "../../contexts/useDialogsContext";
import AddMyListsInput from "./AddMyListsInput";
import "./Dialogs.css";
import SelectTagColorInput from "./SelectTagColorInput";

const DialogsContainer = () => {
  const { isAddMyListsInpuOpen, isSelectTagColorInputOpen } =
    useDialogsContext();
  return (
    <>
      {isAddMyListsInpuOpen && <AddMyListsInput />}
      {isSelectTagColorInputOpen && <SelectTagColorInput />}
    </>
  );
};

export default DialogsContainer;
