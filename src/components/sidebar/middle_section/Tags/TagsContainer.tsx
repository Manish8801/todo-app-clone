import TagsButtons from "./TagsButtons";
import TagsList from "./TagsList";

const TagsContainer = () => {
  return (
    <div className="show-and-hide-on-hover w-60">
      <TagsButtons />
      <TagsList/>
    </div>
  );
};

export default TagsContainer;
