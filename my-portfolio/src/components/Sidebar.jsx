import { NavLink } from "react-router-dom"
import "./Sidebar.css"

function Sidebar() {
  const linkClasses = ({ isActive }) =>
  `text-4xl font-harry font-bold tracking-widest transition-all duration-500 
  ${isActive 
    ? "text-yellow-400 scale-110 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]" 
    : "text-yellow-500 hover:text-yellow-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,223,0,0.7)]"}`

  return (
    <div className="relative flex">
      {/* ה־Sidebar עם החיתוך */}
      <div className="sidebar-zigzag h-screen w-64 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-10 shadow-2xl">
      <NavLink to="/" className={linkClasses}>Home</NavLink>
      <NavLink to="/about" className={linkClasses}>About</NavLink>
      <NavLink to="/projects" className={linkClasses}>Projects</NavLink>
      <NavLink to="/skills" className={linkClasses}>Skills</NavLink>
      <NavLink to="/contact" className={linkClasses}>Contact</NavLink>

    </div>

      <div className="zigzag-border"></div>
    </div>
  )
}

export default Sidebar
