import { createContext, type ReactNode, useReducer, useState } from "react";

export type TodoType = {
  id: number;
  description: string;
  createdAt: Date;
  dueAt: Date | undefined;
  priority: string;
  isCompleted: boolean;
  listName: string;
};
type MyListsContextType = {
  todos: TodoType[];
  selectedTodo: TodoType | undefined;
  myLists: string[];
  activeList: string;
  addMyLists: (listName: string) => void;
  activateList: (listName: string) => void;
  selectTodo: (id: number) => void;
  handleTaskAdd: (
    description: string,
    priority: string,
    dueAt?: Date | undefined
  ) => void;
  handleTaskDelete: (id: number) => void;
  handlePriorityChange: (id: number, priority: string) => void;
  handleDueAtChange: (id: number, dueAt: Date) => void;
  handleListSort: (criteria: "dueAt" | "priority") => void;
  handleTaskComplete: (id: number, isCompleted: boolean) => void;
  handleListNameChange: (id: number, listName: string) => void;
};

enum ActionTypeType {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  CHANGE_PRIORITY = "CHANGE_PRIORITY",
  CHANGE_DUE_AT = "CHANGE_DUE_AT",
  SORT_TASK = "SORT_TASK",
  COMPLETE_TASK = "COMPLETE_TASK",
  CHANGE_LIST_NAME = "CHANGE_LIST_NAME",
}
type AddAction = {
  type: ActionTypeType.ADD_TASK;
  payload: {
    description: string;
    dueAt: Date | undefined;
    priority: string;
    listName: string;
  };
};
type DeleteAction = {
  type: ActionTypeType.DELETE_TASK;
  payload: { id: number };
};
type ChangeDueAtAction = {
  type: ActionTypeType.CHANGE_DUE_AT;
  payload: { id: number; dueAt: Date };
};
type ChangePriorityAction = {
  type: ActionTypeType.CHANGE_PRIORITY;
  payload: { id: number; priority: string };
};
type SortAction = {
  type: ActionTypeType.SORT_TASK;
  payload: { criteria: string };
};
type CompleteAction = {
  type: ActionTypeType.COMPLETE_TASK;
  payload: { id: number; isCompleted: boolean };
};
type ChangeListName = {
  type: ActionTypeType.CHANGE_LIST_NAME;
  payload: { id: number; listName: string };
};
type ActionType =
  | AddAction
  | DeleteAction
  | ChangePriorityAction
  | ChangeDueAtAction
  | SortAction
  | CompleteAction
  | ChangeListName;

const todoReducer = (state: TodoType[], action: ActionType) => {
  switch (action.type) {
    case ActionTypeType.ADD_TASK:
      return [
        ...state,
        {
          id: state.length,
          createdAt: new Date(),
          isCompleted: false,
          ...action.payload,
        },
      ];
    case ActionTypeType.DELETE_TASK:
      return state.filter((todo) => todo.id !== action.payload.id);
    case ActionTypeType.CHANGE_PRIORITY:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, priority: action.payload.priority }
          : todo
      );
    case ActionTypeType.CHANGE_DUE_AT:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, dueAt: action.payload.dueAt }
          : todo
      );
    case ActionTypeType.SORT_TASK:
      const criteria = action.payload.criteria;

      if (criteria === "dueAt") {
        return [...state].sort((a, b) => {
          if (a.dueAt === undefined || b.dueAt === undefined) {
            return -1;
          }
          return new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime();
        });
      } else if (criteria === "priority") {
        const PriorityOrder: { [key: string]: number } = {
          family: 6,
          deadline: 5,
          important: 4,
          priority: 3,
          "science project": 2,
          nothing: 1,
        };
        return [...state].sort(
          (a, b) => PriorityOrder[a.priority] - PriorityOrder[b.priority]
        );
      }
      return [...state].sort((a, b) => a.id - b.id);
    case ActionTypeType.COMPLETE_TASK:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: action.payload.isCompleted }
          : todo
      );
    case ActionTypeType.CHANGE_LIST_NAME:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, listName: action.payload.listName }
          : todo
      );
  }
};
const initialMyLists = ["Personal", "Work", "Home", "Grocery"];
const MyListsContext = createContext<MyListsContextType | null>(null);
const MyListsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTodo, setSelectedTodo] = useState<TodoType | undefined>();
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [activeList, setActiveList] = useState<string>("Personal");
  const [myLists, setMyLists] = useState<string[]>(initialMyLists);

  const selectTodo = (id: number) => {
    setSelectedTodo(todos[id]);
  };
  const addMyLists = (listName: string) => {
    setMyLists([...myLists, listName]);
  };
  const activateList = (listName: string) => {
    setActiveList(listName);
  };
  const handleTaskAdd = (
    description: string,
    priority: string,
    dueAt: Date | undefined = undefined
  ) => {
    dispatch({
      type: ActionTypeType.ADD_TASK,
      payload: { description, dueAt, priority, listName: activeList },
    });
  };
  const handleTaskDelete = (id: number) => {
    dispatch({ type: ActionTypeType.DELETE_TASK, payload: { id } });
  };
  const handlePriorityChange = (id: number, priority: string) => {
    dispatch({
      type: ActionTypeType.CHANGE_PRIORITY,
      payload: { id, priority },
    });
  };
  const handleDueAtChange = (id: number, dueAt: Date) => {
    dispatch({ type: ActionTypeType.CHANGE_DUE_AT, payload: { id, dueAt } });
  };
  const handleListSort = (criteria: "dueAt" | "priority") => {
    dispatch({ type: ActionTypeType.SORT_TASK, payload: { criteria } });
  };
  const handleTaskComplete = (id: number, isCompleted: boolean) => {
    dispatch({
      type: ActionTypeType.COMPLETE_TASK,
      payload: { id, isCompleted },
    });
  };
  const handleListNameChange = (id: number, listName: string) => {
    dispatch({
      type: ActionTypeType.CHANGE_LIST_NAME,
      payload: { id, listName },
    });
  };

  const value = {
    todos,
    selectedTodo,
    myLists,
    activeList,
    addMyLists,
    activateList,
    selectTodo,
    handleTaskAdd,
    handleTaskDelete,
    handlePriorityChange,
    handleDueAtChange,
    handleListSort,
    handleTaskComplete,
    handleListNameChange,
  };
  return (
    <MyListsContext.Provider value={value}>{children}</MyListsContext.Provider>
  );
};

export { MyListsContext as default, MyListsProvider };
