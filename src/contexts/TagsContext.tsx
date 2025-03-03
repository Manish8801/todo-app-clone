import { createContext, ReactNode, useCallback, useState } from "react";

type TagsContextType = {
  tag: string;
  color: string;
  tags: { tagName: string; tagColor: string }[];
  selectColor: (tagName: string) => void;
  selectTag: (tagColor: string) => void;
  addTag: (tagName: string, tagColor: string, preference: number) => void;
};
const TagsContext = createContext<TagsContextType | null>(null);
const TagsProvider = ({ children }: { children: ReactNode }) => {
  const [tag, setTag] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [tags, setTags] = useState<
    { tagName: string; tagColor: string; preference: number }[]
  >([
    { tagName: "family", tagColor: "#FF3D56", preference: 6 },
    { tagName: "deadline", tagColor: "#FF7A00", preference: 5 },
    { tagName: "important", tagColor: "#FFB900", preference: 4 },
    { tagName: "important", tagColor: "#5DDB6A", preference: 3 },
    { tagName: "Priority", tagColor: "#F9D21F", preference: 2 },
    { tagName: "science project", tagColor: "#2FC24A", preference: 1 },
  ]);

  const selectTag = useCallback((tagName: string) => {
    setTag(tagName);
  }, []);
  const selectColor = useCallback((tagColor: string) => {
    setColor(tagColor);
  }, []);
  const addTag = useCallback(
    (tagName: string, tagColor: string, preference: number) => {
      tags.forEach((tag) => {
        if (tag.tagName === tagName) {
          alert("Tag already existst");
          return;
        }
        setTags([...tags, { tagName, tagColor, preference }]);
      });
    },
    []
  );
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
