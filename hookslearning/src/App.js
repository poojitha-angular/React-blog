import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import FormPage from './components/FormPage';
import ProfileComponent from './components/ProfileComponent';
import { LoginContext } from './components/context/ParentContext';

function App() {
  const [showprofile,setprofile]=useState(false)
  const [name,setname]=useState(' ')
  
  return (
    <div className="App">

      <h1>hooks</h1>
  
  <LoginContext.Provider value={{name,setname,setprofile}}>
  {showprofile ? <ProfileComponent></ProfileComponent> :<FormPage></FormPage>}
  </LoginContext.Provider>

     {/* <FormPage></FormPage>
    
     <ProfileComponent></ProfileComponent> */}
    </div>
  );
}

export default App;
