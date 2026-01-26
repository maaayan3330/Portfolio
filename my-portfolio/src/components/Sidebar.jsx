import { NavLink } from "react-router-dom"
import "./Sidebar.css"

function Sidebar({ menuOpen, setMenuOpen }) {
  const linkClasses = ({ isActive }) =>
    `text-4xl font-harry font-bold tracking-widest transition-all duration-500
    ${
      isActive
        ? "text-yellow-400 scale-110 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
        : "text-yellow-500 hover:text-yellow-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,223,0,0.7)]"
    }`

  return (
    <>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`
          fixed md:static top-0 left-0 z-50
          h-screen w-64 bg-black/90 backdrop-blur-md
          flex flex-col items-center justify-center gap-10 shadow-2xl
          transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <button
          className="absolute top-4 right-4 text-yellow-400 text-2xl md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" className={linkClasses} onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/projects" className={linkClasses} onClick={() => setMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/skills" className={linkClasses} onClick={() => setMenuOpen(false)}>Skills</NavLink>
        <NavLink to="/contact" className={linkClasses} onClick={() => setMenuOpen(false)}>Contact</NavLink>

        <div className="zigzag-border hidden md:block"></div>
      </div>
    </>
  )
}

export default Sidebar
