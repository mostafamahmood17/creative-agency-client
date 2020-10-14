import React from 'react';
import { Link } from 'react-router-dom';
import frame from '../../../images/logos/Frame.png'
const Header = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
            <div className="row">
                <div className="col-md-6 pt-5 ml-4">
                    <h1>Let’s Grow Your 
                    <br/>
                    Brand To The
                    <br/>
                     Next Level</h1>
                     <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
                     </p>
                     <Link to="/clientOrder"><button className="btn btn-dark">Hire us</button></Link>
                </div>
                <div className="col-md-4 mx-auto">
                    <img style={{width:"324.6px", height:"320px"}}src={frame} alt=""/>

                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;