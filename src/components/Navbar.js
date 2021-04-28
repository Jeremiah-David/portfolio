import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-aqua">
            <div className="container">
                <Link className="navbar-brand" to="/">{`JD Portfolio`}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects"> Projects </NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;