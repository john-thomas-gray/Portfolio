import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="layout">
      <header className="nav" aria-label="Primary navigation">
        <nav className="nav-inner">
          <NavLink
            id="nav-one"
            className="nav-item"
            to="/"
            end
            aria-label="Home"
          >
            Home
          </NavLink>
          <NavLink
            id="nav-two"
            className="nav-item"
            to="/projects"
            aria-label="Projects"
          >
            Projects
          </NavLink>
          <NavLink
            id="nav-three"
            className="nav-item"
            to="/about"
            aria-label="About"
          >
            About
          </NavLink>
        </nav>
      </header>
      <main id="main" className="main">
        <Outlet />
      </main>
    </div>
  );
}
