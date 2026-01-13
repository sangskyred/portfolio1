import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top mb-5">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#" title="Home"><span>Logo</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true"
                            style={{
                                pointerEvents: 'none',
                                display: 'inherit',
                                width: '100%',
                                height: '100%',
                            }}>
                            <path d="M20 5H4a1 1 0 000 2h16a1 1 0 100-2Zm0 6H4a1 1 0 000 2h16a1 1 0 000-2Zm0 6H4a1 1 0 000 2h16a1 1 0 000-2Z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href="#skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#resume">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;