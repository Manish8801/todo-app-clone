import Count from "../../Count";

type MyListsItemProps = {
  listName: string;
};

function MyListsItem({ listName }: MyListsItemProps) {
  return (
    <li className="w-full min-w-56">
      <button className="w-full py-2.5 pl-6 text-grey sidebar-button flex-center-start gap-3">
        <div>{listName}</div>
        <Count count={0} />
      </button>
    </li>
  );
}

export default MyListsItem;
