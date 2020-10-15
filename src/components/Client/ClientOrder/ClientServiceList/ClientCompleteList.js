import React from 'react';



const ClientCompleteList = ({ clientList }) => {

    return (
        <div>
            <div class="card w-75 d-block mt-2">
                
                <div class="card-body">
                    <h5 class="card-title">{clientList.name}</h5>
                    <p class="card-text">{clientList.projectName}</p>
                </div>
            </div>











            {/* <div className="col-md-4" style={{ width: "200px", height: "100px"}}>
                <div className="d-flex justify-content-between">
                    <div className="mr-3">
                        <img style={{ width: "50px" }} src="" alt="" />
                    </div>
                    <div>
                        <img style={{ width: "50px" }} src="" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div  className="col-md-4">
                      <h4>{clientList.name}</h4>
                    </div>
                    <div className="col-md-4">
                      <p>{clientList.projectName}</p>
                    </div>
                    
                   
                </div>
            </div> */}

        </div>
    );
};

export default ClientCompleteList;