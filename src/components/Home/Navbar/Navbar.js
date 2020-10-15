import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AgencyContext } from '../../../App';
import logo from "../../../images/logos/logo.png"

const Navbar = () => {
    const {loggedInUser, setLoggedInUser} = useContext(AgencyContext);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <Link to="/"><img className="navbar-brand img-fluid w-25" src={logo} alt=""/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active pr-3">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item pr-3">
                            <Link to="/" className="nav-link">Our Portfolio</Link>
                        </li>
                        <li className="nav-item pr-3">
                            <Link to="/" style={{textWrap:"wrap"}}className="nav-link d-block">Our Team</Link>
                        </li>
                        <li className="nav-item pr-3">
                            <Link to="/clientOrder" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item pr-3">
                            {
                                loggedInUser.email ?
                                        <li>{loggedInUser.name}</li> 
                                : 
                                      <button className="btn btn-dark"><Link to="/login" className="nav-link text-white">Login</Link></button>
                            }
                      
                        </li>
                       
                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;