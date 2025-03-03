import { createContext, ReactNode, useCallback, useState } from "react";

type SidebarContextType = {
  isSidebarJammed: boolean;
  isMyListsOpen: boolean;
  isTagsOpen: boolean;
  toggleIsMyListsOpen: () => void;
  toggleIsTagsOpen: () => void;
  toggleIsSidebarJammed: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarJammed, setIsSidebarJammed] = useState<boolean>(true);
  const [isMyListsOpen, setIsMyListsOpen] = useState<boolean>(false);
  const [isTagsOpen, setIsTagsOpen] = useState<boolean>(false);

  const toggleIsSidebarJammed = useCallback(() => {
    setIsSidebarJammed(!isSidebarJammed);
  }, [isSidebarJammed]);

  const toggleIsMyListsOpen = useCallback(() => {
    setIsMyListsOpen(!isMyListsOpen);
  }, [isMyListsOpen]);
  const toggleIsTagsOpen = useCallback(() => {
    setIsTagsOpen(!isTagsOpen);
  }, [isTagsOpen]);

  const value = {
    isSidebarJammed,
    isMyListsOpen,
    isTagsOpen,
    toggleIsMyListsOpen,
    toggleIsTagsOpen,
    toggleIsSidebarJammed,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export { SidebarContext as default, SidebarProvider };
