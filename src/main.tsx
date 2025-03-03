import React from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SidebarProvider } from "./components/sidebar/sidebar_context/SidebarContext.tsx";
import { DialogsProvider } from "./contexts/DialogsContext.tsx";
import { MyListsProvider } from "./contexts/MyListsContext.tsx";

React.createRoot(document.getElementById("root")!).render(
    <DialogsProvider>
      <MyListsProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </MyListsProvider>
    </DialogsProvider>
);
