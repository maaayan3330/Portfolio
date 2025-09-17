import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="flex">
      <Sidebar /> 
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  )
}

export default App
