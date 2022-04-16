// import axios from "axios";
// import { useEffect, useState } from "react";
import {  Route,Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Welcome from './pages/Welcome';
// import NotFound from './pages/404';
import UserItem from './pages/UserItem';


function App() {
      
  return(
    <div>
      <Navbar />
     
      <Routes>
        <Route path="/" > 
          {/* <Redirect to='/welcome' /> */}
        </Route>
        <Route path="/welcome" element = { <Welcome />}/>
        <Route path="/users" exact element = {<Users />} />
        <Route path="users/:userId" element={<UserItem />}/>
        {/* <Route path="/*" element = {<NotFound />}/> */}
      </Routes>
  
    </div>
  )
  
  }

export default App;