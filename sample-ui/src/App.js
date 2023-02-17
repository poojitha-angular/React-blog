import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Form } from 'react-router-dom';
import HeaderPage from './Components/Pages/header/HeaderPage';
import LoginPage from './Components/Pages/loginpage/LoginPage';
import RegistrationPage from './Components/Pages/registration/RegistrationPage';
import Header from './Components/Header'
import Login from './Components/Login';
import Registration from './Components/Registration';
import BannerPage from './Components/Pages/banner/BannerPage';
import UserPage from './Components/Pages/user/UserPage';
import ChallengePages from './Components/Pages/challengepage/ChallengePages';


function App() {
  return (
    <div className="App">
     {/* <Header></Header>
     <Login></Login>
     <Registration></Registration> */}
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeaderPage></HeaderPage>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/register" element={<RegistrationPage></RegistrationPage>}></Route>
      <Route path="/banner" element={<BannerPage></BannerPage>}></Route>
      <Route path="/user" element={<UserPage></UserPage>}></Route>
      <Route path="/challenges" element={<ChallengePages></ChallengePages>}></Route>
      
      
    </Routes>
    </BrowserRouter>
    </div> 
  );
}

export default App;
