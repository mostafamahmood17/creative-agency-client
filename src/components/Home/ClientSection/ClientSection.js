import React from 'react';
import clientOne from '../../../images/customer-1.png'

const ClientSection = () => {
    return (
        <div className="container mt-5">
            <h3 className="text-center mb-5">Clients<span style={{ color: "#7AB259" }}>Feedback</span></h3>
            <div className="row">
                <div className="col-md-3 p-1 ml-3 mr-3 border border-secondary p-1">
                    <div className="d-flex">
                        <div className="mr-3">
                            <img style={{width:"50px"}} src={clientOne} alt="" />
                        </div>
                        <div>
                            <h4>Nash Patrik</h4>
                            <h5>CEO, Manpol</h5>
                        </div>

                    </div>
                    <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                        </p>
                     </div>
                       
                </div>
                <div className="col-md-3 p-1 ml-3 mr-3 border border-secondary">
                <div className="d-flex">
                        <div className="mr-3">
                            <img style={{width:"50px"}} src={clientOne} alt="" />
                        </div>
                        <div>
                            <h4>Nash Patrik</h4>
                            <h5>CEO, Manpol</h5>
                        </div>

                    </div>
                    <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                        </p>
                     </div>
                </div>
                
                <div className="col-md-3 p-1 ml-3 mr-3 border border-secondary">
                <div className="d-flex">
                        <div className="mr-3">
                            <img style={{width:"50px"}} src={clientOne} alt="" />
                        </div>
                        <div>
                            <h4>Nash Patrik</h4>
                            <h5>CEO, Manpol</h5>
                        </div>

                    </div>
                    <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                        </p>
                     </div>
                </div>
                
            </div>


        </div>
    );
};

export default ClientSection;