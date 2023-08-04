import './App.css';
import {Routes,Route, useNavigate} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider, useUserAuth } from './context/UserAuthContext';
import Home from './Home';


function App() {
  return (
        <UserAuthContextProvider>
        <Routes>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/Signup" element ={<Signup/>}/>
          <Route path="/" element ={<Home />} />
        </Routes>
        </UserAuthContextProvider>
  );
}

export default App;
