import MyLists from "./MyLists";
import MyListsButtons from "./MyListsButtons";

const MyListsContainer = () => {
  return (
    <div className="show-and-hide-on-hover w-60">
      <MyListsButtons />
      <MyLists />
    </div>
  );
};

export default MyListsContainer;
