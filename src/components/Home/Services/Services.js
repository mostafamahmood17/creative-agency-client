import React from 'react';
import serviceOne from ".././../../images/icons/service1.png"
import serviceTwo from ".././../../images/icons/service2.png"
import serviceThree from ".././../../images/icons/service3.png"

const Services = () => {
    return (
        <div className="container">
            <h1 className="text-center" style={{marginTop:"100px"}}>Provide awesome <span style={{color:"#7AB259"}}>services</span></h1>
            <div className="row text-center mt-5">
                <div className="col-md-4">
                    <img style={{width:"50px"}} src={serviceOne} alt=""/>
                    <h3>Web & Mobile design</h3>
                    <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                </div>
                <div className="col-md-4">
                <img style={{width:"50px"}} src={serviceTwo} alt=""/>
                    <h3>Graphic design</h3>
                    <p >Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                </div>
                <div className="col-md-4">
                <img style={{width:"50px"}} src={serviceThree} alt=""/>
                    <h3>Web development</h3>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Services;