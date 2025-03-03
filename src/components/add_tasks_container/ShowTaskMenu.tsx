import { GrTarget } from "react-icons/gr";
import { LuBell } from "react-icons/lu";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineHashtag } from "react-icons/hi";
import { FiArchive } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const options = [
  { icon: <GrTarget />, optionName: "Add to My Day" },
  { icon: <LuBell />, optionName: "Reminder" },
  { icon: <RiFileList2Line />, optionName: "Lists" },
  { icon: <HiOutlineHashtag />, optionName: "Tags" },
  { icon: <FiArchive />, optionName: "Archive" },
];

const ShowTaskMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const closeDropdown = (e: Event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    window.addEventListener("scroll", closeDropdown);

    return () => {
      window.removeEventListener("click", closeDropdown);
      window.removeEventListener("scroll", closeDropdown);
    };
  }, [isOpen]); // Empty dependency array

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div ref={dropdownRef}>
      {!isOpen && (
        <button
          className={`list-options-button hover:text-primary-blue duration-200 outline-none group-hover:block hidden`}
          onClick={toggleDropdown}
        >
          <HiOutlineDotsVertical />
        </button>
      )}
      {isOpen && (
        <ul className="bg-secondary-black flex flex-col py-2 absolute rounded-xl">
          {options.map(({ icon, optionName }) => (
            <li key={optionName}>
              <button className="w-full outline-none px-6 py-2 flex items-center justify-start gap-2 hover:bg-[rgba(255,255,255,.15)] group">
                <div className="text-white text-lg">{icon}</div>
                <div className="text-white">{optionName}</div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowTaskMenu;
