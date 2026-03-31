import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { ClientDetail } from "./pages/ClientDetail";
import { Commercial } from "./pages/Commercial";
import { Chat } from "./pages/Chat";
import { Invoices } from "./pages/Invoices";
import { ActivationTracking } from "./pages/ActivationTracking";
import { Moving } from "./pages/Moving";
import { Termination } from "./pages/Termination";
import { NewClient } from "./pages/NewClient";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/client/:id",
    Component: ClientDetail,
  },
  {
    path: "/commercial",
    Component: Commercial,
  },
  {
    path: "/chat",
    Component: Chat,
  },
  {
    path: "/invoices",
    Component: Invoices,
  },
  {
    path: "/activation",
    Component: ActivationTracking,
  },
  {
    path: "/moving",
    Component: Moving,
  },
  {
    path: "/termination",
    Component: Termination,
  },
  {
    path: "/new-client",
    Component: NewClient,
  },
]);