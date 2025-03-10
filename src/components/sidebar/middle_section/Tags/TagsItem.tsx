import useMyListsContext from "../../../../contexts/useMyListsContext";

type TagsItemProps = {
  tagName: string;
  tagColor: string;
}

const TagsItem = ({ tagName, tagColor } : TagsItemProps) => {
  const { selectTag} = useMyListsContext();
  const handleButtonClick = () => {
    selectTag(tagName);
  }
  return (
    <li className="">
      <button
        className={`sidebar-button text-nowrap flex-center-start w-full pl-6 py-2.5 hover:bg-third-black`}
        style={{
          color: tagColor,
        }}
        onClick={handleButtonClick}
      >{`#${tagName}`}</button>
    </li>
  );
};

export default TagsItem;
