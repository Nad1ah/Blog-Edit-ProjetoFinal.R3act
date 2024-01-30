import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/index";
import PostPage from "./pages/post/index";
import BarNav from "./components/navBar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BarNav>
        <RootPage />
      </BarNav>
    ),
  },
  {
    path: "/post/:id",
    element: (
      <BarNav>
        <PostPage />
      </BarNav>
    ),
  },
]);
