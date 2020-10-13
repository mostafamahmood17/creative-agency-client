import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faUserCog, faPlus } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    return (
        <div>
            <div>
                        <Link to='/'><img src={logo} width="120px" height="50px" alt="" /></Link>
                        <br />
                        <Link to='/admin'><h4 className="mt-3"><FontAwesomeIcon icon={faTable} />Service list</h4></Link>
                        <Link to='/servicesAdd'><h4><FontAwesomeIcon icon={faPlus} />Add Service</h4></Link>
                        <Link to='/addadmin'><h4><FontAwesomeIcon icon={faUserCog} />Add Admin</h4></Link>
             </div>
        </div>
    );
};

export default Sidebar;