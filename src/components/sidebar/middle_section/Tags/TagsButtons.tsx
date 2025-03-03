import useDialogsContext from "../../../../contexts/useDialogsContext";
import AddIconButton from "../../AddIconButton";
import SelectTagColor from "./SelectTagColorButton";
import TagsDropdownButton from "./TagsDropdownButton"

const TagsButtons = () => {
  const {toggleIsSelectTagColorInputOpen} = useDialogsContext();
  return (
    <div className="group flex-center-between section-heading">
      <TagsDropdownButton />
      <SelectTagColor />
      <AddIconButton onClick={toggleIsSelectTagColorInputOpen} />
    </div>
  );
}

export default TagsButtons