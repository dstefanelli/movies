import { NavLink } from "react-router"

export default function Header() {
  return (
    <header className="header fixed top-0 left-0 right-0 bg-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <nav className="nav basis-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-5 inline-block ${isActive ? "bg-gray-600 text-white" : "text-black"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `p-5 inline-block ${isActive ? "bg-gray-600 text-white" : "text-black"}`
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="/series"
              className={({ isActive }) =>
                `p-5 inline-block ${isActive ? "bg-gray-600 text-white" : "text-black"}`
              }
            >
              Series
            </NavLink>
          </nav>
          <div className="flex basis-auto gap-4">
            <button className="">Login</button>
            <button className="rounded-full mt-2 h-12 bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700">
              Start your Free Trial
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
