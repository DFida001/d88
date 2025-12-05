import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/summary">Summary</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
        <li>
          <button onClick={logout} aria-label="Logout">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
