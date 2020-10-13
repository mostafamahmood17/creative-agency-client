import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AgencyContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import Sidebar from '../Sidebar/Sidebar';

const AdminDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(AgencyContext)
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
                        {loggedInUser &&  <h3>{loggedInUser.name}</h3>}
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
                            <tbody>
                                <tr>
                                    <th scope="row">n</th>
                                    <td>a</td>
                                    <td>b</td>
                                    <td>i</td>

                                    <td>
                                        <select>
                                            <option className="text-danger" name="pending" id="">Pending</option>
                                            <option className="text-warning" name="onGoing" id="">On going</option>
                                            <option className="text-success" name="done" id="">Done</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;