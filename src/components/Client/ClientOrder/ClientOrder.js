import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AgencyContext } from '../../../App';
import Sidebar from '../../Admin/Sidebar/Sidebar';

const ClientOrder = () => {
    // make order component
    const { loggedInUser, setLoggedInUser } = useContext(AgencyContext)
    const [orderDetail, setOrderDetail] = useState({});
    const [serviceFind, setServiceFind] = useState({});
    const { _id } = useParams();
    const history = useHistory();



    useEffect(() => {
        fetch('https://fast-sea-24208.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                findService(data)
            })

    }, [])

    const findService = (service) => {
        const job = service.find(serv => serv._id == _id);
        setServiceFind(job)

    }


    const handleBlur = e => {
        const detail = { ...orderDetail };
        detail[e.target.name] = e.target.value;
        setOrderDetail(detail);

    }

    const submitHandler = (e) => {
        e.preventDefault();
        const email = loggedInUser.email;
        const projectName = serviceFind ? serviceFind.name : orderDetail.projectName;
        const description = serviceFind ? serviceFind.description : orderDetail.description;
        // const picture = serviceFind ? serviceFind.picture : "https://imgur.com/TYebHDl.png";
        // const status = serviceFind ? serviceFind.status : "pending";
        const newDetail = { ...orderDetail, email, projectName, description }
        console.log(newDetail)

        fetch('https://fast-sea-24208.herokuapp.com/orderInfo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                history.push('/clientServiceList');

            })

    }


    return (
        // order form
        <div>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h3>Dashboard</h3>
                            </div>
                            <div>
                                {loggedInUser && <h3>{loggedInUser.name}</h3>}
                            </div>
                        </div>
                        <form onSubmit={submitHandler}>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name / company’s name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" defaultValue={loggedInUser.email} required />
                            </div>
                            <div className="form-group">
                                {serviceFind ?
                                    <input type="text" className="form-control" defaultValue={serviceFind.name} required />
                                    :
                                    <input type="text" onBlur={handleBlur} className="form-control" name="projectName" placeholder="Project Name" required />
                                }
                            </div>
                            <div className="form-group">
                                {serviceFind ?
                                    <input type="text" className="form-control" defaultValue={serviceFind.description} required />
                                    :
                                    <input type="text" onBlur={handleBlur} className="form-control" name="description" placeholder="description" required />
                                }
                            </div>
                            
                                



                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Price" required />
                                <br />
                                <input type="file" className="form-control btn btn-outline-success" placeholder="Picture" />
                            </div>
                            <button type="submit" className="btn btn-dark text-white">Send</button>
                        </form>




                    </div>

                </div>
            </div>


        </div>
    );
};

export default ClientOrder;