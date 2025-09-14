import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="flex">
      {/* Sidebar בצד שמאל */}
      <Sidebar />

      {/* אזור התוכן - רקע הארי פוטר */}
      <div 
        className="flex-1 h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('/harrypotter.jpg')" }}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default App
