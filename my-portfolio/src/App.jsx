
import { Outlet, Link } from "react-router-dom"

function App() {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex gap-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        <Link to="/about" className="hover:text-blue-400">About Me</Link>
        <Link to="/skills" className="hover:text-blue-400">Skills</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
