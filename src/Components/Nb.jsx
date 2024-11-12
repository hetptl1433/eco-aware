import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/image/LogoWhite.jpeg';

const Nb = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#e0f7e4' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Bootstrap" width="60" height="60" />
        </a>
        <a className="navbar-brand" href="#" style={{ color: '#1c8b7e' }}>
          Eco-Aware
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
              <a className="nav-link active" aria-current="page" href="#" style={{ color: '#1c8b7e' }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: '#1c8b7e' }}>
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: '#1c8b7e' }}
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" style={{ color: '#1c8b7e' }}>Action</a></li>
                <li><a className="dropdown-item" href="#" style={{ color: '#1c8b7e' }}>Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#" style={{ color: '#1c8b7e' }}>Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true" style={{ color: '#9e9e9e' }}>
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ borderColor: '#1c8b7e' }}
            />
            <button className="btn btn-outline-success" type="submit" style={{ color: '#1c8b7e', borderColor: '#1c8b7e' }}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nb;
