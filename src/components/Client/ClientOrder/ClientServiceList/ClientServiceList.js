import React, { useContext, useEffect, useState } from 'react';
import { AgencyContext } from '../../../../App';
import Sidebar from '../../../Admin/Sidebar/Sidebar';
import ClientCompleteList from './ClientCompleteList';

const ClientServiceList = () => {
    const {loggedInUser, setLoggedInUser} = useContext(AgencyContext)

    const [clientOrder, setClientOrder] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/order/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setClientOrder(data))
    }, [loggedInUser.email])

    return (
        <div>
            <div className="container mt-2">
                <div className="row">

                    <div className="col-lg-3 col-sm-12">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-9 col-sm-12">
                        <h1>Your Services</h1>

                        <div className="">

                        {
                            clientOrder.map(clientList => <ClientCompleteList key={Math.random()} clientList={clientList}></ClientCompleteList>)
                        }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientServiceList;