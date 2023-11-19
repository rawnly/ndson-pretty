import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Theme, ThemePanel } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme accentColor="tomato">
      {import.meta.env.DEV && <ThemePanel />}
      <App />
    </Theme>
  </React.StrictMode>,
);
