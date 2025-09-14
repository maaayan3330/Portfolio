import { NavLink } from "react-router-dom"

function Sidebar() {
  const linkClasses = ({ isActive }) =>
    `text-xl transition-all duration-300 ${
      isActive ? "text-yellow-400 scale-125" : "text-white hover:text-yellow-200"
    }`

  return (
    <div className="h-screen w-48 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-6">
      <NavLink to="/" className={linkClasses}>Home</NavLink>
      <NavLink to="/about" className={linkClasses}>About</NavLink>
      <NavLink to="/projects" className={linkClasses}>Projects</NavLink>
      <NavLink to="/skills" className={linkClasses}>Skills</NavLink>
    </div>
  )
}

export default Sidebar
