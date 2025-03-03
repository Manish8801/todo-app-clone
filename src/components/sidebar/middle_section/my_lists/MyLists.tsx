import { useEffect, useRef } from "react";
import useSidebarContext from "../../sidebar_context/useSidebarContext";
import MyListsItem from "./MyListItem";
import dropdownEffect from "../../giveDropdownEffect";
import useMyListsContext from "../../../../contexts/useMyListsContext";
import { v4 as uuidv4 } from "uuid";

const MyLists = () => {
  const { isMyListsOpen } = useSidebarContext();
  const { myLists } = useMyListsContext();
  const listContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (listContainerRef.current) {
      dropdownEffect(isMyListsOpen, listContainerRef.current);
    }
  });

  return (
    <div className="overflow-hidden" ref={listContainerRef}>
      <ul>
        {myLists.map((listName) => (
          <MyListsItem key={uuidv4()} listName={listName} />
        ))}
      </ul>
    </div>
  );
};

export default MyLists;
