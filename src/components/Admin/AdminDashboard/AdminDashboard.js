import React, { useContext, useEffect, useState } from 'react';
import { AgencyContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AdminDashboard = () => {
    // dashboard / all user and order information
    const { loggedInUser, setLoggedInUser } = useContext(AgencyContext)

    const [allOrder, setAllOrder] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allOrder/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [loggedInUser.email])

    // const updateHandle = (event, id) => {
    //     const updateProject = event.target.value
    //     const newStatus = { id, updateProject }

    //     fetch("http://localhost:5000/projectStatus", {
    //         method: 'PATCH',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(newStatus)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result)
    //         })
    // }

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
                                <h3>Dashboard</h3>
                            </div>
                            <div>
                                {loggedInUser && <h3>{loggedInUser.name}</h3>}
                            </div>
                        </div>

                        <table className="table table-white">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Services</th>
                                    <th scope="col">Project DetailsRole</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>

                            {allOrder.map(order =>
                                <tbody key={Math.random()}>
                                    <tr>
                                        <th scope="row">{order.name}</th>
                                        <td>{order.email}</td>
                                        <td>{order.projectName}</td>
                                        <td>{order.description}</td>

                                        <td>
                                            <select>
                                                    <option style={{ color: '#FF4545' }} name="pending"  defaultValue="pending"  id="">Pending</option>
                                                    <option style={{ color: '#009444' }} name="on going" defaultValue="on going" id="">On going</option>
                                                    <option style={{ color: '#009444' }} name="done" defaultValue="done" id="">Done</option>  
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            )}

                        </table>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;