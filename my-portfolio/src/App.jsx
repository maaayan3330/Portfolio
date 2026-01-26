import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Snitch from "./components/Snitch"
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen relative bg-gray-100">
      
      {/* Sidebar בדסקטופ + מובייל */}
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* תוכן */}
      <div className="flex-1 p-4 md:p-10 text-gray-800">
        {/* כפתור תפריט במובייל */}
        <button
          className="md:hidden mb-4 text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

        <Outlet />
      </div>

      {/* Snitch – נטפל בו במובייל */}
      <Snitch />
    </div>
  )
}

export default App
