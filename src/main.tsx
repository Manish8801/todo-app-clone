import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SidebarProvider } from "./components/sidebar/sidebar_context/SidebarContext.tsx";
import { DialogsProvider } from "./contexts/DialogsContext.tsx";
import { MyListsProvider } from "./contexts/MyListsContext.tsx";
import { StrictMode } from "react";
import { TagsProvider } from "./contexts/TagsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <DialogsProvider>
    <MyListsProvider>
      <TagsProvider>
        <SidebarProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </SidebarProvider>
      </TagsProvider>
    </MyListsProvider>
  </DialogsProvider>
);
