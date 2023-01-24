import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import Card from './components/Card';
import Contactus from './components/Contactus';


function App() {
  return (
    <div className="App">
   <Header></Header>
     {/* <div class="content-ctn">
     <Card></Card>
     <Card></Card>
     <Card></Card>
    </div>  */}
    <Contactus></Contactus>
    
    </div>
  )
}

export default App;
