import React from 'react';

const ClientReviewSection = (props) => {
    console.log(props)
    const {name, Description, companyName, image } = props.reviews;
    return (
        <div>
             <div className="col-md-4">
                 {/* <div className="">
                        <div className="d-flex justify-content-between">
                            <div className="mr-3">
                                <img style={{ width: "50px" }} src={image} alt="" />
                            </div>
                            <div>
                                <h5>{name}</h5>
                                <h5>{companyName}</h5>
                            </div>

                        </div>
                        <div>
                            <p>
                                {Description}
                            </p>
                        </div>
                </div> */}
                <div className="container col-md-5 border border-light rounded bg-light mb-2 ml-5" style={{ width: "20rem" }}>
                            <div className="col-md-4">
                                <div className="d-flex">
                                    <img className='' src={image} width="100px" height="100px" alt="" />
                                    <span className="col">
                                      <p className="card-text">{name}</p>
                                       <p className="card-text">{companyName}</p>
                                    </span>
                                    
                                </div>

                                <div className="">
                                    
                                    <p className="card-text">{Description}</p>
                                </div>

                            </div>

                        </div>

              </div>
            
        </div>
    );
};

export default ClientReviewSection;