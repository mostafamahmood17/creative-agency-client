import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faUserCog, faPlus, faCartPlus, faNetworkWired, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { AgencyContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {
    // sidebar component
    const {loggedInUser, setLoggedInUser} =useContext(AgencyContext);
    const [isAdmin, setIsAdmin]=useState(false);
    useEffect(() => {
       fetch('https://fast-sea-24208.herokuapp.com/isAdmin', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json'},
           body: JSON.stringify({email : loggedInUser.email})
       })
       .then(res => res.json())
       .then(data => setIsAdmin(data));
    }, [loggedInUser.email])

   
    return (
        <div>
            <div>
                        <Link to='/'><img src={logo} width="120px" height="50px" alt="" /></Link>
            {
            isAdmin?
                        <>
                         <Link style={{ textDecoration: 'none' }} to='/admin'><h2 className=" assign mt-3 text-dark "><FontAwesomeIcon icon={faTable} /><span id="" className="pl-1">Service list</span></h2></Link>
                         <Link style={{ textDecoration: 'none' }} to='/servicesAdd'><h2  className=" assign text-dark "><FontAwesomeIcon icon={faPlus} /><span className="pl-1">Add Service</span></h2></Link>
                         <Link style={{ textDecoration: 'none' }}  to='/addadmin'><h2 className="assign text-dark "><FontAwesomeIcon icon={faUserCog} /><span className="pl-1 ">Add Admin</span></h2></Link>
                        </>
            :
                        <>
                        
                         <Link style={{ textDecoration: 'none' }} to='/clientOrder'><h2 className="assign text-dark "><FontAwesomeIcon icon={faCartPlus} /><span className="pl-1 ">Place order</span ></h2></Link>
                         <Link style={{ textDecoration: 'none' }} to='/clientServiceList'><h2 className="assign text-dark "><FontAwesomeIcon icon={faNetworkWired} /><span className="pl-1 ">My service list</span></h2></Link>
                         <Link style={{ textDecoration: 'none' }} to='/review'><h2 className="assign text-dark "><FontAwesomeIcon icon={faCommentAlt} /><span className="pl-1">Review</span></h2></Link>
                        
                        </>
            }
                        
             </div>
        </div>
    );
};

export default Sidebar;