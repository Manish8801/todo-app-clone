import { createContext, ReactNode, useState } from "react";
type MyListsContextType = {
  myLists: string[];
  activeList: string;
  addMyLists: (listName: string) => void;
  activateList: (listName: string) => void;
};

const initialMyLists = ["Personal", "Work", "Home", "Grocery"];

const MyListsContext = createContext<MyListsContextType | null>(null);
const MyListsProvider = ({ children }: { children: ReactNode }) => {
  const [activeList, setActiveList] = useState<string>("");
  const [myLists, setMyLists] = useState<string[]>(initialMyLists);

  const addMyLists = (listName: string) => {
    setMyLists([...myLists, listName]);
  };
  const activateList = (listName: string) => {
    setActiveList(listName);
  };
  const value = { myLists, activeList, addMyLists, activateList };
  return (
    <MyListsContext.Provider value={value}>{children}</MyListsContext.Provider>
  );
};

export { MyListsContext as default, MyListsProvider };
