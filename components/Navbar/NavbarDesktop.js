'use client'
import React, { useState } from "react";
import Link from "next/link";

const NavbarDesktop = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top" role="navigation">
            <div className="container">
                <div className="nav-header">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <ul className="navbar-nav ms-auto">
                        <li><Link className="nav-link active" aria-current="page" href="#">Home</Link></li>
                        <li><Link className="nav-link" href="#">Features</Link></li>
                        <li><Link className="nav-link" href="#">Pricing</Link></li>
                        <li><Link className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarDesktop;