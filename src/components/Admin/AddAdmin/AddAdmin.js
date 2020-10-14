import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AgencyContext } from '../../../App';

import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    const {loggedInUser, setLoggedInUser} = useContext(AgencyContext)

   
    return (
        <div>

        <div className="container mt-2">
            <div className="row">

                <div className="col-lg-4 col-sm-12">
                   <Sidebar></Sidebar>
                </div>
                <div className="col-lg-8 col-sm-12">
                    
                    <div className="d-flex justify-content-between">
                            <div>
                                <h3 className="text-center">Add Admin</h3>
                            </div>
                            <div>
                                {loggedInUser && <h3>{loggedInUser.name}</h3>}
                            </div>
                        </div>
                        <form style={{height:"100vh", width:"100%"}} className="bg-light p-5 rounded"> 
                        <div >
                            <div className="form-group bg-white" >
                                <label htmlFor="email">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email for new admin" />

                            </div>


                            <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>

                </div>

            </div>
        </div>
            
        </div>
    );
};

export default AddAdmin;