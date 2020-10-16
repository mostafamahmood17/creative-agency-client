import React from 'react';
import slack from '../../../images/logos/slack.png';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import './ClientBrand.css'

const ClientBrand = () => {
// client logo component
    return (
        <div className="d-flex justify-content-center">
          <div className="row container mt-5">
            <img className="mt-5 ml-3 col-md-2 imageSize" src={slack} alt=""/>
            <img className="mt-5 ml-3 col-md-2 imageSize" src={google} alt=""/>
            <img className="mt-5 ml-3 col-md-2 imageSize" src={uber} alt=""/>
            <img className="mt-5 ml-3 col-md-2 imageSize" src={netflix} alt=""/>
            <img className="mt-5 ml-3 col-md-2 imageSize" src={airbnb} alt=""/>
          </div>
        </div>
    );
};

export default ClientBrand;