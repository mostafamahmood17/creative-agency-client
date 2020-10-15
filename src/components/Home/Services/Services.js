import React, { useContext, useEffect, useState } from 'react';
import { AgencyContext } from '../../../App';
import serviceOne from ".././../../images/icons/service1.png"
import serviceTwo from ".././../../images/icons/service2.png"
import serviceThree from ".././../../images/icons/service3.png"
import ServiceWeProvide from './ServiceWeProvide';

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-center" style={{marginTop:"100px"}}>Provide awesome <span style={{color:"#7AB259"}}>services</span></h1>
            <div className="row text-center mt-5">

                {
                    service.map(s => <ServiceWeProvide key={s._id} s={s}></ServiceWeProvide>)
                }
                
            </div>
            
        </div>
    );
};

export default Services;