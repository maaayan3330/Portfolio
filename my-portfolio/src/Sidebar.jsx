import { NavLink } from "react-router-dom"

function Sidebar() {
  return (
    <div className="h-screen w-72 bg-red-800 flex flex-col items-center justify-center gap-6">
      <NavLink to="/" className="text-white text-2xl">Home</NavLink>
      <NavLink to="/about" className="text-white text-2xl">About</NavLink>
      <NavLink to="/projects" className="text-white text-2xl">Projects</NavLink>
      <NavLink to="/skills" className="text-white text-2xl">Skills</NavLink>
    </div>
  )
}

export default Sidebar
