import React from "react";

export default function Nav() {
  return (
    <header>
      <nav className="my-nav hstack p-2">
        <img src="./images/logo.png" alt="" />
        <ul className="nav d-sm-none d-md-flex">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Nabídky práce
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Seznam škol
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Pro uchazeče
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Pro školy
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Ceník
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
