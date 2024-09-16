import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Home from "../Components/Home/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
