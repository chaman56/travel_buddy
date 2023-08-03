import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "./context/UserAuthContext";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header";
import './App.css'
import './genral.css'
import Main from "./components/main";
import Footer from "./components/footer";
import PackagePage from './components/PackagePage';

const Home = () =>{
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
    <>
      <Header user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/packages" element ={<PackagePage />}/>
        <Route path="/packages/:id" element ={<PackagePage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default Home;
