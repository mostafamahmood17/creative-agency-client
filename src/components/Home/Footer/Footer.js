import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="">

            <footer style={{backgroundColor:"#FBD062"}} className="font-small mt-5">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <h4 className="font-weight-bold text-uppercase mt-3 mb-4">Let us handle your <br />
                            project, professionally.</h4>
                            <p>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</p>
                        </div>
                        <div className="col-md-6 m-auto pt-3">
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="enter your Email"/>
                                </div>
                                <div className="form-group">
                                    <input type="name" className="form-control" placeholder="company name"/>
                                </div>
                                    <div className="form-group">
                                        <textarea className="form-control" rows="3" placeholder="Your message"></textarea>
                                    </div>
                             </form>
                        </div>


                        </div>
                    </div>
                    <div className=" text-center py-3">© {(new Date()).getFullYear()} Copyright: Creative Agency
  </div>
            </footer>
        </div>
    );
};

export default Footer;