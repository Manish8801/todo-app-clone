import useDialogsContext from "../../../../contexts/useDialogsContext";
import AddIconButton from "../../AddIconButton";
import SelectTagColor from "./SelectTagColor";
import TagsDropdownButton from "./TagsDropdownButton"

const TagsButtons = () => {
  const {toggleIsSelectTagColorInputOpen} = useDialogsContext();
  return (
    <div className="flex-center-between section-heading">
      <TagsDropdownButton />
      <SelectTagColor />
      <AddIconButton onClick={toggleIsSelectTagColorInputOpen} />
    </div>
  );
}

export default TagsButtons