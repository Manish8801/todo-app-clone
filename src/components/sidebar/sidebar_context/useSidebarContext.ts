import { useContext } from "react";
import SidebarContext from "./SidebarContext";

const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("The app must be used in SidebarContextProvider");
  }
  return { ...context };
};

export default useSidebarContext;
