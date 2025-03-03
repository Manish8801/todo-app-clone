import useDialogsContext from "../../contexts/useDialogsContext";
import AddMyListsInput from "./AddMyListsInput";
import ChangeMyListsInput from "./ChangeMyListsInput";
import "./Dialogs.css";
import SelectTagColorInput from "./SelectTagColorInput";

const DialogsContainer = () => {
  const { isAddMyListsInpuOpen, isSelectTagColorInputOpen, isChangeListNameInputOpen } =
    useDialogsContext();
  return (
    <>
      {isAddMyListsInpuOpen && <AddMyListsInput />}
      {isSelectTagColorInputOpen && <SelectTagColorInput />}
      {isChangeListNameInputOpen && <ChangeMyListsInput/>}
    </>
  );
};

export default DialogsContainer;
