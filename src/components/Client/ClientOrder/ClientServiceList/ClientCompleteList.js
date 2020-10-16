import React from 'react';



const ClientCompleteList = ({ clientList }) => {

    return (
        // client order list for client
        <div className="card m-3 p-3">
            <div className="p-4">
                <img src={clientList.picture} height="60px" style={{ borderRadius: '60%' }} alt="" />
                <div style={{ backgroundColor: '#FFE3E3', borderRadius: '6px' }} className="p-2 px-4 d-inline-block float-right ml-auto">
                    <span style={{ color: '#FF4545' }}>{clientList.status}</span>
                </div>
                <h5 className="font-weight-bold mt-2">{clientList.name}</h5>
                <p>{clientList.projectName}</p>
            </div>
        </div>















    );
};

export default ClientCompleteList;