import React from 'react';
import Sidebar from '../../../Admin/Sidebar/Sidebar';

const ClientServiceList = () => {
    return (
        <div>
            <div className="container mt-2">
                <div className="row">

                    <div className="col-lg-3 col-sm-12">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-9 col-sm-12">
                        <h1>Your Services</h1>

                        <div className="row">


                            <div className="col-md-6 p-1 ml-3 mr-3 border border-secondary p-1">
                                <div className="d-flex justify-content-between">
                                    <div className="mr-3">
                                        <img style={{ width: "50px" }} src="" alt="" />
                                    </div>
                                    <div>
                                    <img style={{ width: "50px" }} src="" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <h4>Nash Patrik</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientServiceList;