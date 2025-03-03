import { useEffect, useRef } from "react";
import TagsItem from "./TagsItem";
import useSidebarContext from "../../sidebar_context/useSidebarContext";
import dropdownEffect from "../../giveDropdownEffect";

const TagsList = () => {
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
        <TagsItem tag="Priority" color="#ffff00" />
       
      </ul>
    </div>
  );
};

export default TagsList;
