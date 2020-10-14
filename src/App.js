import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import ServicesAdd from './components/Admin/ServicesAdd/ServicesAdd';
import ClientOrder from './components/Client/ClientOrder/ClientOrder';
import ClientReview from './components/Client/ClientOrder/ClientReview/ClientReview';
import ClientServiceList from './components/Client/ClientOrder/ClientServiceList/ClientServiceList';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const AgencyContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <AgencyContext.Provider value={{loggedInUser, setLoggedInUser}}>

      <Router>

        <Switch>
        
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addadmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/ServicesAdd">
            <ServicesAdd></ServicesAdd>
          </Route>
          <Route path="/admin">
            <AdminDashboard></AdminDashboard>
          </Route>
          <PrivateRoute path="/clientOrder">
            <ClientOrder></ClientOrder>
          </PrivateRoute>
          <Route path="/clientServiceList">
          <ClientServiceList></ClientServiceList>
          </Route>
          <PrivateRoute path="/review">
          <ClientReview></ClientReview>
          </PrivateRoute>
          
          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>

      </Router>
    </AgencyContext.Provider>

  );
}

export default App;
