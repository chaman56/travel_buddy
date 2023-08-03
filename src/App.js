import './App.css';
import {Routes,Route, useNavigate} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider, useUserAuth } from './context/UserAuthContext';
import Home from './Home';
import PackagePage from './components/PackagePage';
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
        <UserAuthContextProvider>
        <Routes>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/Signup" element ={<Signup/>}/>
          <Route path="/">
            <Header user={user} handleLogout={handleLogout} />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/packages" element ={<PackagePage />}/>
              <Route path="/packages/:id" element ={<PackagePage />}/>
            </Routes>
            <Footer />
          </Route>
        </Routes>
        </UserAuthContextProvider>
  );
}

export default App;
