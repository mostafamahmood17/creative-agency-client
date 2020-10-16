import React from 'react';
import { useHistory } from 'react-router-dom';
import "./ServiceWeProvide.css"





const ServiceWeProvide = ({ s }) => {

        const history = useHistory();
        function handleClick(id) {
                history.push(`/order/${id}`);
        }

        return (


                <div onClick={() => handleClick(s._id)}  className="col-md-4" >
                        <div>
                               
                                {s.image ? <img className="img-fluid" id='pictureOne' src={`data:image/png;base64,${s.image.img}`} />
                                        :
                                         <img className="img-fluid"  id='pictureOne' style={{ width: "50px" }} src={`http://localhost:5000/${s.img}`} alt="" />
                                }
                        </div>
                        <h3>{s.name}</h3>
                        <p>{s.projectName}</p>
                </div>


        );
};

export default ServiceWeProvide;