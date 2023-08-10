
import './App.css'
import './genral.css'
import React from "react";
import {Routes,Route, useNavigate} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider, useUserAuth } from './context/UserAuthContext';
import Home from './Home';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';


function App() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
        <Routes>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/Signup" element ={<Signup/>}/>
          <Route path="/" element={<Home />}>
            <Route index element={<Header user={user} handleLogout={handleLogout} />} />
            <Route path="/*" element={<Main />} />
            <Route index element={<Footer />} />
          </Route>
        </Routes>
  );
}

export default App;
