import React from 'react';
import { useHistory } from 'react-router-dom';
import "./ServiceWeProvide.css"





const ServiceWeProvide = ({ ser }) => {

        const history = useHistory();
        function handleClick(id) {
                history.push(`/order/${id}`);
        }

        return (


                <div onClick={() => handleClick(ser._id)}  className="col-md-4" >
                        <div>
                               
                                {ser.image ? <img alt="" className="img-fluid" id='pictureOne' src={`data:image/png;base64,${ser.image.img}`} />
                                        :
                                         <img className="img-fluid"  id='pictureOne' style={{ width: "50px" }} src={`https://fast-sea-24208.herokuapp.com/${ser.img}`} alt="" />
                                }
                        </div>
                        <h3>{ser.name}</h3>
                        <p>{ser.description}</p>
                </div>


        );
};

export default ServiceWeProvide;