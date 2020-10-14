import React from 'react';

const ServiceWeProvide = ({s}) => {
//  const {name, description, img} = props.s;
     
    return (
        
            <div className="col-md-4">
               {s.image ? <img className="img-fluid" style={{width:"200px"}} src={`data:image/png;base64,${s.image.img}`}/> 
               :
               <img className="img-fluid" style={{width:"200px"}} src={`http://localhost:5000/${s.img}`} alt=""/>
               }
                    <h3>{s.name}</h3>
                    <p>{s.description}</p>
            </div>
        
    );
};

export default ServiceWeProvide;