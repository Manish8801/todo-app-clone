import useDialogsContext from "../../../../contexts/useDialogsContext";
import AddIconButton from "../../AddIconButton";
import MyListsDropdown from "./MyListsDropdownButton";

const MyListsButtons = () => {
  const { toggleIsAddMyListsInputOpen } = useDialogsContext();
  return (
    <div className="flex-center-center section-heading">
      <MyListsDropdown />
      <AddIconButton onClick={toggleIsAddMyListsInputOpen} />
    </div>
  );
};

export default MyListsButtons;
