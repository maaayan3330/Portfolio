import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

function App() {
  return (
    
    <div className="flex">
      <Sidebar /> 
      <h1 className="text-3xl font-bold text-red-500">Hello Tailwind</h1>
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  )
}

export default App
