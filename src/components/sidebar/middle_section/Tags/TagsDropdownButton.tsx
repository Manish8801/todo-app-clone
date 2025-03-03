import useSidebarContext from "../../sidebar_context/useSidebarContext";

const TagsDropdownButton = () => {
  const { toggleIsTagsOpen } = useSidebarContext();
  const handleButtonClick = () => {
    toggleIsTagsOpen();
  };
  return (
    <button
      className="flex-1 flex-center-start outline-none pl-6 py-2.5 text-white font-bold"
      onClick={handleButtonClick}
    >
      <div className="flex-center-start gap-3">
        <div className="text-white font-bold text-xl">Tags</div>
      </div>
    </button>
  );
};

export default TagsDropdownButton;
