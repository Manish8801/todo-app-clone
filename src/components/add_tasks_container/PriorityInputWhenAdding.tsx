import useMyListsContext from "../../contexts/useMyListsContext";
import { v4 as uuidv4 } from "uuid";

const PriorityInputWhenAdding = ({
  isPriorityInputOpen,
  focusOnTextarea,
  togglePriorityInputOpen,
}: {
  isPriorityInputOpen: boolean;
  focusOnTextarea: () => void;
  togglePriorityInputOpen: () => void;
}) => {
  const { tags, selectTag } = useMyListsContext();

  return (
    <ul
      className={`custom-scroll w-full absolute duration-200 overflow-y-auto h-full ${
        isPriorityInputOpen ? "-translate-y-[165%]" : "translate-0"
      } bg-light-black py-2 text-left text-nowrap`}
    >
      {tags.map(({ tagName, tagColor }) => (
        <li key={uuidv4()}>
          <button
            className="cursor-pointer px-5 py-3 w-full hover:bg-[rgba(255,255,255,0.1)]"
            style={{ color: `${tagColor}` }}
            onClick={() => {
              selectTag(tagName);
              togglePriorityInputOpen();
              focusOnTextarea();
            }}
          >
            #{tagName}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PriorityInputWhenAdding;
