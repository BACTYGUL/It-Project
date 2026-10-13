import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Servis from "./pages/Servis";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Layout from "./components/layout/Layout";
import Letter from "./pages/Letter";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/servis",
        element: <Servis />,
      },
      {
        path: "/search/:text",
        element: <Search />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path:"/letter/:id",
        element:<Letter/>,
      },
    ],
  },
]);
