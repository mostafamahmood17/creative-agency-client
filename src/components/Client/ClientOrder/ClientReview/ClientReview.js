import React, { useContext, useState } from 'react';
import { AgencyContext } from '../../../../App';
import Sidebar from '../../../Admin/Sidebar/Sidebar';

const ClientReview = () => {
    // review component
    const { loggedInUser, setLoggedInUser } = useContext(AgencyContext);
    const [info, setInfo] = useState({});


    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const name = loggedInUser.name;
        const image = loggedInUser.image;
        const newDoc = { ...info, name, image };


        fetch('https://fast-sea-24208.herokuapp.com/addReviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newDoc)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Thanks for your review");
            })

    }
    return (
        <div className="container mt-2">
            <div className="row">

                <div className="col-lg-3 col-sm-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-9 col-sm-12">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>Dashboard</h3>
                        </div>
                        <div>
                            {loggedInUser && <h3>{loggedInUser.name}</h3>}
                        </div>
                    </div>

                    <div className="p-5" style={{ backgroundColor: "#E5E5E5" }}>
                        <form onSubmit={submitHandler}>

                            <div className="form-group">
                                <input type="text" className="form-control" name="name" defaultValue={loggedInUser.name} />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="companyName" placeholder="Company’s name, Designation" required />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="Description" placeholder="Description" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control d-none" name="image" placeholder={loggedInUser.image} />
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