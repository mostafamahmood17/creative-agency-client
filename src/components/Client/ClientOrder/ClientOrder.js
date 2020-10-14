import React from 'react';
import Sidebar from '../../Admin/Sidebar/Sidebar';

const ClientOrder = () => {
    return (
        <div>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                    <h1>Order</h1>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Your name / company’s name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Your email address" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="project name" placeholder="Graphics Design" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="description" placeholder="Project Details" />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Price" />
                            <br/>
                            <input type="file" className="form-control" placeholder="Picture" />
                        </div>
                        <button type="submit" className="btn btn-dark text-white pr-5 pl-5">Send</button>
                    </form>




                    </div>

                </div>
            </div>

            
        </div>
    );
};

export default ClientOrder;