import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Snitch from "./Snitch";

function App() {
  return (
    
    <div className="flex">
      <Sidebar /> 
      <div className="flex-1 p-10">
        <Outlet />
      </div>
      <Snitch />
    </div>
  )
}

export default App
