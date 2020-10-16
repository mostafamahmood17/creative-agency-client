import React from 'react';

const ClientReviewSection = (props) => {
    const { name, Description, companyName, image } = props.reviews;
    return (
        <div>
            <div className="col-md-4">
                <div className="card row" style={{  marginLeft: "2px", marginTop: "2px", width: "300px", padding: "4px", height: "200px", maxHeight: "400px" }}>
                    <div className="col mb-5" >
                        <div className="d-flex justify-content-start">
                            <div>
                                <img src={image} style={{ width: "80px", borderRadius:"60px" }} alt="" />
                            </div>
                            <div className="ml-4 ">
                                <h3>{name}</h3>
                                <h5>{companyName}</h5>
                            </div>
                        </div>
                        <div>
                            <p className="mt-4 text-secondary" style={{ whiteSpace: "noWrap", overflow: "hidden", textOverflow: "ellipsis" }}>{Description}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ClientReviewSection;