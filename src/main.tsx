import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
