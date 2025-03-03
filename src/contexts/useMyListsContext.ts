import { useContext } from "react";
import MyListsContext from "./MyListsContext";

const useMyListsContext = () => {
  const context = useContext(MyListsContext);
  if (!context) {
    throw new Error("The app must opened within MyListsContext");
  }
  return { ...context };
};

export default useMyListsContext;
