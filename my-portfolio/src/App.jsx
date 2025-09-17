import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Snitch from "./Snitch"

function App() {
  return (
 <div
  className="flex min-h-screen relative bg-gray-100"

>
  <Sidebar />
  <div className="flex-1 p-10 text-gray-800">
    <Outlet />
  </div>
  <Snitch />
</div>
  )
}

export default App
