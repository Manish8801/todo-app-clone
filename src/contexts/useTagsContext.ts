import { useContext } from "react";
import TagsContext from "./TagsContext";

const useTagsContext = () => {
  const context = useContext(TagsContext);
  if (!context) {
    throw new Error("The app must opened within TagsContext");
  }

  return { ...context };
};

export default useTagsContext;
