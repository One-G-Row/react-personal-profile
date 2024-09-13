import "../index.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar ">
      <ul>
        <li className="list-none hover:list-disc">
          <NavLink to="/">
            <h1 className="text-2xl font-bold">Faith's Profile</h1>
          </NavLink>
          <div className="text-center">
            <NavLink to="/" className="px-8">
              Home
            </NavLink>
            <NavLink to="/projects" className="px-8 relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-current="page">
              Projects
            </NavLink>
            <NavLink to="/skills" className="px-8 relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-current="page">
              Skills
            </NavLink>
           {/*  <NavLink to="/services" className="px-8 relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-current="page">
              Services
            </NavLink> */}
            <NavLink to="/contact" className="px-8 relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-current="page">
              Contact
            </NavLink>
            <NavLink to="/about" className="px-8 relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-current="page">
              About
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
