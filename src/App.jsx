import { RouterProvider } from "react-router-dom"
import { route } from "./Routes/Index"

function App() {

  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
