import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import ServicesAdd from './components/Admin/ServicesAdd/ServicesAdd';
import ClientOrder from './components/Client/ClientOrder/ClientOrder';
import ClientReview from './components/Client/ClientOrder/ClientReview/ClientReview';
import ClientServiceList from './components/Client/ClientOrder/ClientServiceList/ClientServiceList';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import NotMatch from './components/NotMatch/NotMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';



export const AgencyContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <AgencyContext.Provider value={{ loggedInUser, setLoggedInUser }}>

      <Router>

        <Switch>

          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/addadmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/ServicesAdd">
            <ServicesAdd></ServicesAdd>
          </PrivateRoute>
          <PrivateRoute path="/order/:_id">
            <ClientOrder></ClientOrder>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminDashboard></AdminDashboard>
          </PrivateRoute>
          <PrivateRoute path="/clientOrder">
            <ClientOrder></ClientOrder>
          </PrivateRoute>
          <PrivateRoute path="/clientServiceList">
            <ClientServiceList></ClientServiceList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <ClientReview></ClientReview>
          </PrivateRoute>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotMatch></NotMatch>
          </Route>=
        </Switch>

      </Router>
    </AgencyContext.Provider>

  );
}

export default App;
