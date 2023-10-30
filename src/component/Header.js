import React from "react";

export default function Header() {
  return (
    <header className="ps-0 pe-0">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Navbar
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
