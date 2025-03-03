import { useEffect, useRef } from "react";
import TagsItem from "./TagsItem";
import useSidebarContext from "../../sidebar_context/useSidebarContext";
import dropdownEffect from "../../giveDropdownEffect";
import useTagsContext from "../../../../contexts/useTagsContext";

const TagsList = () => {
  const {tags} = useTagsContext();
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
        {tags.map(
          ({tagName, tagColor}) => (<TagsItem tagName={tagName} tagColor={tagColor} />))
        }
      </ul>
    </div>
  );
};

export default TagsList;
