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
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';


export const AgencyContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <AgencyContext.Provider value={[loggedInUser, setLoggedInUser]}>

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
          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>

      </Router>
    </AgencyContext.Provider>

  );
}

export default App;
