import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faUserCog, faPlus, faCartPlus, faNetworkWired, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { AgencyContext } from '../../../App';


const Sidebar = () => {
    const {loggedInUser, setLoggedInUser} =useContext(AgencyContext);
    const [isAdmin, setIsAdmin]=useState(false);
    useEffect(() => {
       fetch('http://localhost:5000/isAdmin', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json'},
           body: JSON.stringify({email : loggedInUser.email})
       })
       .then(res => res.json())
       .then(data => setIsAdmin(data));
    }, [])
    return (
        <div>
            <div>
                        <Link to='/'><img src={logo} width="120px" height="50px" alt="" /></Link>
            {isAdmin &&
                        <div>
                        <Link to='/admin'><h4 className="mt-3 text-dark"><FontAwesomeIcon icon={faTable} />Service list</h4></Link>
                        <Link to='/servicesAdd'><h4 className="text-dark"><FontAwesomeIcon icon={faPlus} />Add Service</h4></Link>
                        <Link to='/addadmin'><h4 className="text-dark"><FontAwesomeIcon icon={faUserCog} />Add Admin</h4></Link>
                        </div>
            }
                        <Link to='/clientOrder'><h4 className="text-dark"><FontAwesomeIcon icon={faCartPlus} />Place order</h4></Link>
                        <Link to='/clientServiceList'><h4 className="text-dark"><FontAwesomeIcon icon={faNetworkWired} />My service list</h4></Link>
                        <Link to='/review'><h4 className="text-dark"><FontAwesomeIcon icon={faCommentAlt} />Review</h4></Link>
                        
             </div>
        </div>
    );
};

export default Sidebar;