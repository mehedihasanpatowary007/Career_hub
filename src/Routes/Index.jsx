import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import AppliedJob from "../Components/AppliedJobs/AppliedJob";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Components/Home/Home";
import Statistics from "../Components/Statistics/Statistics";
import JobDetails from "../Components/Jobs/JobDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/applied", element: <AppliedJob /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/jobs/:id", element: <JobDetails />},
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
