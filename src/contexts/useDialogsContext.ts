import { useContext } from "react";
import DialogsContext from "./DialogsContext";

const useDialogsContext = () => {
  const context = useContext(DialogsContext);
  if (!context) {
    throw new Error("The app must opened within DialogsContext");
  }
  return { ...context };
};

export default useDialogsContext;
