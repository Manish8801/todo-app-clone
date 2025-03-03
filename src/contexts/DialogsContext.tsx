import { createContext, ReactNode, useState } from "react";

type DialogsContextType = {
  isAddMyListsInpuOpen: boolean;
  isSelectTagColorInputOpen: boolean;
  isChangeListNameInputOpen: boolean;
  toggleIsChangeListNameInputOpen: () => void;
  toggleIsSelectTagColorInputOpen: () => void;
  toggleIsAddMyListsInputOpen: () => void;
};

const DialogsContext = createContext<DialogsContextType | null>(null);
const DialogsProvider = ({ children }: { children: ReactNode }) => {
  const [isAddMyListsInpuOpen, setIsAddMyListsInputOpen] =
    useState<boolean>(false);
  const [isSelectTagColorInputOpen, setIsSelectTagColorInputOpen] =
    useState<boolean>(false);
  const [isChangeListNameInputOpen, setIsChangeListNameInputOpen] =
    useState<boolean>(false);
  const toggleIsChangeListNameInputOpen = () => {
    setIsChangeListNameInputOpen(!isChangeListNameInputOpen);
  };
  const toggleIsSelectTagColorInputOpen = () => {
    setIsSelectTagColorInputOpen(!isSelectTagColorInputOpen);
  };
  const toggleIsAddMyListsInputOpen = () => {
    setIsAddMyListsInputOpen(!isAddMyListsInpuOpen);
  };
  const value = {
    isAddMyListsInpuOpen,
    isSelectTagColorInputOpen,
    isChangeListNameInputOpen,
    toggleIsChangeListNameInputOpen,
    toggleIsSelectTagColorInputOpen,
    toggleIsAddMyListsInputOpen,
  };
  return (
    <DialogsContext.Provider value={value}>{children}</DialogsContext.Provider>
  );
};

export { DialogsContext as default, DialogsProvider };
