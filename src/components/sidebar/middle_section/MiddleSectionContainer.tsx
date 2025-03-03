import { LuTarget } from "react-icons/lu";
import { FaRegCalendarPlus } from "react-icons/fa";
import { RiFileList2Line } from "react-icons/ri";
import { PiCalendarBlankBold } from "react-icons/pi";

import NavButton from "./NavButton";
import MyListsContainer from "./my_lists/MyListsContainer";
import TagsContainer from "./Tags/TagsContainer";
import { useRef } from "react";

const MiddleSectionContainer = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollDirection = useRef<number>(0);

  const handleScroll = () => {
    if (ref.current) {
      const { scrollTop, clientHeight, scrollHeight } = ref.current;

      if (Math.round(scrollHeight) === Math.round(clientHeight)) return;
      if (scrollTop > scrollDirection.current) {
        scrollDirection.current = scrollTop;
        ref.current.style.boxShadow =
          "inset 0px 17px 10px -12px rgba(0, 0, 0, 0.4)";
      } else if (scrollTop < scrollDirection.current) {
        scrollDirection.current = scrollTop;
        ref.current.style.boxShadow =
          "inset 0px -17px 10px -12px rgba(0, 0, 0, 0.4)";
      }
    }
  };

  return (
    <div
      className="custom-scroll flex-1 overflow-y-auto"
      ref={ref}
      onScroll={handleScroll}
    >
      <div>
        <NavButton
          iconSize={"text-[19px]"}
          icon={LuTarget}
          buttonName="My Day"
        />
        <NavButton
          iconSize={"text-[19px]"}
          icon={FaRegCalendarPlus}
          buttonName="Next 7 days"
          count={6}
        />
        <NavButton
          iconSize={"text-[21px]"}
          icon={RiFileList2Line}
          buttonName="All my tasks"
          count={3}
        />
        <NavButton
          iconSize={"text-[21px]"}
          icon={PiCalendarBlankBold}
          buttonName="My Calendar"
        />
      </div>
      <MyListsContainer />
      <TagsContainer />
    </div>
  );
};

export default MiddleSectionContainer;
