import React, { useContext, useState } from 'react';
import { AgencyContext } from '../../../App';

import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    // add admin component
    const {loggedInUser, setLoggedInUser} = useContext(AgencyContext);
    const [admin, setAdmin] = useState();
    const handleBlur = (e) => {
        const newAdmin= { ...admin};
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newAdminEmail = {...admin};
         
        fetch('http://localhost:5000/createAdmin',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newAdminEmail)
    })
    .then(res =>res.json())
    .then(data => {
        console.log(data);
        alert("admin created")
       

    })
       
    }



   
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
                        <form onSubmit={handleSubmit} style={{height:"100vh", width:"100%"}} className="bg-light p-5 rounded"> 
                        <div >
                            <div className="form-group bg-white" >
                                <label htmlFor="email">Email address</label>
                                <input onBlur={handleBlur} type="email" className="form-control" name="email" id="email" placeholder="Enter email for new admin" required/>

                            </div>


                            <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>

                </div>

            </div>
        </div>
            
        </div>
    );
};

export default AddAdmin;