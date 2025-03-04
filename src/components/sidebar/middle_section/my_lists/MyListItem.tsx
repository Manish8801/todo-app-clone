import useMyListsContext from "../../../../contexts/useMyListsContext";
import Count from "../../Count";

type MyListsItemProps = {

  listName: string;
};

function MyListsItem({ listName }: MyListsItemProps) {
  const {activateList,todos}  = useMyListsContext()
  const handleButtonClick = (listName : string) => {
    activateList(listName)
  }
  return (
    <li className="w-full min-w-56">
      <button className={`w-full py-2.5 pl-6 text-grey sidebar-button flex-center-start gap-3`} onClick={() => handleButtonClick(listName)}>
        <div>{listName}</div>
        <Count count={todos.filter(todo => todo.listName === listName).length} />
      </button>
    </li>
  );
}

export default MyListsItem;
