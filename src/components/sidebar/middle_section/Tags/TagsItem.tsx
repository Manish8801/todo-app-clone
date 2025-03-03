
type TagsItemProps = {
  tag: string;
  color: string;
}

const TagsItem = ({ tag, color } : TagsItemProps) => {
  return (
    <li className="">
      <button
        className={`sidebar-button flex-center-start w-full pl-6 py-2.5 hover:bg-third-black`}
        style={{
          color: color,
        }}
      >{`#${tag}`}</button>
    </li>
  );
};

export default TagsItem;
