import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

export const Navbar = () => {
  const onSearchSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    let searchTerm: HTMLInputElement | null;
    searchTerm = document.querySelector('#search-term');
    let url =
      'https://www.google.com/search?q=mdbytes.com+md+web+technologies+' +
      searchTerm?.value;
    window.location.href = url;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="site logo in navbar"
              className="site-logo"
              height="32"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  id="home-link"
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/faq">
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <form
              id="search-form"
              className="d-flex"
              role="search"
              action="https://google.com/search"
              method="get"
              onSubmit={(evt: React.SyntheticEvent) => onSearchSubmit(evt)}
            >
              <input
                id="search-term"
                className="form-control me-2"
                type="search"
                placeholder="Custom Google Search"
                aria-label="Search"
                name="q"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
