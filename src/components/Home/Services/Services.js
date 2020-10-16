import React, { useEffect, useState } from 'react';
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
                    service.map(ser => <ServiceWeProvide key={ser._id} ser={ser}></ServiceWeProvide>)
                }
                
            </div>
            
        </div>
    );
};

export default Services;