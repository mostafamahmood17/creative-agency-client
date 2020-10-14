import React, { useContext } from 'react';
import { AgencyContext } from '../../../../App';
import Sidebar from '../../../Admin/Sidebar/Sidebar';

const ClientReview = () => {
    const{loggedInUser, setLoggedInUser} = useContext(AgencyContext)
    return (
        <div className="container mt-2">
            <div className="row">

                <div className="col-lg-3 col-sm-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-9 col-sm-12">
                    <h1>Review</h1>

                    <div className="p-5" style={{backgroundColor:"#E5E5E5"}}>
                        <form>

                            <div className="form-group">
                                <input type="text" className="form-control" name="name" placeholder={loggedInUser.name}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="company name" placeholder="Company’s name, Designation" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="Description" placeholder="Description" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control d-none" name="image" placeholder={loggedInUser.image}/>
                            </div>
                            <button type="submit" className="btn btn-dark text-white pr-5 pl-5">Send</button>
                        </form>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default ClientReview;