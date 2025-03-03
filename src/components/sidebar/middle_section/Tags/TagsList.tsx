import { useEffect, useRef } from "react";
import TagsItem from "./TagsItem";
import useSidebarContext from "../../sidebar_context/useSidebarContext";
import dropdownEffect from "../../giveDropdownEffect";
import { v4 as uuidv4 } from "uuid";
import useMyListsContext from "../../../../contexts/useMyListsContext";

const TagsList = () => {
  const { tags } = useMyListsContext();
  const { isTagsOpen } = useSidebarContext();
  const tagsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tagsContainerRef.current) {
      dropdownEffect(isTagsOpen, tagsContainerRef.current);
    }
  });

  return (
    <div className="overflow-hidden" ref={tagsContainerRef}>
      <ul>
        {tags.map(({ tagName, tagColor }) => (
          <TagsItem key={uuidv4()} tagName={tagName} tagColor={tagColor} />
        ))}
      </ul>
    </div>
  );
};

export default TagsList;
