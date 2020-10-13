import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="">

            <footer style={{backgroundColor:"#FBD062"}} class="font-small mt-5">
                <div class="container text-center text-md-left">
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <h4 class="font-weight-bold text-uppercase mt-3 mb-4">Let us handle your <br />
                            project, professionally.</h4>
                            <p>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</p>
                        </div>
                        <div class="col-md-6 m-auto pt-3">
                            <form>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="enter your Email"/>
                                </div>
                                <div class="form-group">
                                    <input type="name" class="form-control" placeholder="company name"/>
                                </div>
                                    <div class="form-group">
                                        <textarea class="form-control" rows="3" placeholder="Your message"></textarea>
                                    </div>
                             </form>
                        </div>


                        </div>
                    </div>
                    <div class=" text-center py-3">© 2020 Copyright: Creative Agency
  </div>
            </footer>
        </div>
    );
};

export default Footer;