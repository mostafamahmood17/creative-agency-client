import React from 'react';



const ClientCompleteList = ({ clientList }) => {

    return (
       


            <div className="col-md-4 my-lg-0 my-3 border border-dark p-1 m-1 rounder">
				<div>
					<div className="d-flex justify-content-around">
						
							<img width="50px" src="https://imgur.com/fryWcXu.png" alt="" />
						
							<p style={{width:"100px", height:"30px",border:'1px solid red', borderRadius:"5px"}} className="text-danger text-center">Pending</p>
						
					
					</div>
					<div className="mt-2 text-center">
						<h4>{clientList.name}</h4>
						<p>{clientList.projectName}</p>
					</div>
				</div>
			</div>











        
    );
};

export default ClientCompleteList;