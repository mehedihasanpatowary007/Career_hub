import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Index"
import JobsProvider from "./Provider/JobsProvider";

function App() {

  return (
    <>
      <JobsProvider>
        <RouterProvider router={router} />
      </JobsProvider>
    </>
  );
}

export default App
