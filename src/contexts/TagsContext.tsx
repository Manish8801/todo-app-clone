import { createContext, ReactNode, useCallback, useState } from "react";

type TagsContextType = {
  tag: string;
  color: string;
  tags: { tagName: string; tagColor: string }[];
  selectColor: (tagName: string) => void;
  selectTag: (tagColor: string) => void;
  addTag: (tagName: string, tagColor: string) => void;
};
const TagsContext = createContext<TagsContextType | null>(null);
const TagsProvider = ({ children }: { children: ReactNode }) => {
  const [tag, setTag] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [tags, setTags] = useState<{ tagName: string; tagColor: string }[]>([
    { tagName: "family", tagColor: "#FF3D56" },
    { tagName: "deadline", tagColor: "#FF7A00" },
    { tagName: "nothing", tagColor: "#FFB900" },
    { tagName: "science project", tagColor: "#2FC24A" },
    { tagName: "important", tagColor: "#5DDB6A" },
    { tagName: "Priority", tagColor: "#F9D21F" },
  ]);

  const selectTag = useCallback((tagName: string) => {
    setTag(tagName);
  }, []);
  const selectColor = useCallback((tagColor: string) => {
    setColor(tagColor);
  }, []);
  const addTag = useCallback((tagName: string, tagColor: string) => {
    setTags([...tags, { tagName, tagColor }]);
  }, []);
  const value = {
    tag,
    color,
    tags,
    selectTag,
    selectColor,
    addTag,
  };
  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>;
};

export { TagsContext as default, TagsProvider };
