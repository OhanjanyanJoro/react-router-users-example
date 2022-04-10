// import axios from "axios";
// import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Welcome from './pages/Welcome';
import NotFound from './pages/404';
import UserItem from './pages/UserItem';


function App() {
      
  return(
    <div>
      <Navbar />

      <Switch>
        <Route path="/" exact> 
          <Redirect to='/welcome' />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/users/:userId">
          <UserItem />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
  
    </div>
  )
  
  }

export default App;