import React, { useContext, useEffect, useState } from 'react';
import { AgencyContext } from '../../../../App';
import Sidebar from '../../../Admin/Sidebar/Sidebar';
import ClientCompleteList from './ClientCompleteList';

const ClientServiceList = () => {
    // client order list main component
    const { loggedInUser, setLoggedInUser } = useContext(AgencyContext)

    const [clientOrder, setClientOrder] = useState([])
    useEffect(() => {
        fetch(`https://fast-sea-24208.herokuapp.com/order/${loggedInUser.email}`)
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
                        <div className="d-flex justify-content-between">
                            <div>
                                <h3>Dashboard</h3>
                            </div>
                            <div>
                                {loggedInUser && <h3>{loggedInUser.name}</h3>}
                            </div>
                        </div>

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