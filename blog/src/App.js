import logo from './logo.svg';


import Card from './components/Card';

import Header from './components/Header';
import Homepage from './components/Pages/Home/Homepage';
import Aboutus from './components/Pages/Aboutus/Aboutus';
import Blogpage from './components/Pages/Blog/Blogpage';
import {BrowserRouter,Routes,Route, Form } from 'react-router-dom';
import Contactus from './components/Pages/Contact/Contactus';
import PrivacyAndPolicy from './components/PrivacyAndPolicy';
import Form1 from './components/Form1';
import FormPractise from './PractiseComponent/FormPractise';




function App() {
  var num=[1,2,3,4,5]
  // let title=["ChatGPT","Covid","Cricket","India","Iphone"]
  // let card_details=[
  //   {
  //     title:"ChatGPT",
  //     desc:"Ai-tool"
  //   },
  //   {
  //     title:"Covid",
  //     desc:"Medicines"
  //   },
  //   {
  //     title:"Cricket",
  //     desc:"Matches"
  //   },
  //   {
  //     title:"India",
  //     desc:"Republicon Country"
  //   },
  //   {
  //     title:"Ipone",
  //     desc:"Apple Company"
  //   }

  // ]
  // let ite=[1,2,3,4,5,6]
  
  return (
    <div className="App">
   {/* <Header ite="Nonveg"></Header>
   <Header ite="Veg"></Header>
   <Header ite="Nonveg"></Header> */}
     {/* <Header></Header>   */}
     {/* <div class="content-ctn">
       {
          card_details.map(v => (
            <Card ite={v.title} ></Card>
           )
      
           )

       }
    </div>  */}
     {/* <div class="content-ctn"> {
        ite.map(v => (
          <Card num={v}></Card>
        ))

     } */}

<BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/contact" element={<Contactus></Contactus>}></Route>
      <Route path="/Blog" element={<Blogpage></Blogpage>}></Route>

    </Routes>
    </BrowserRouter>
    <PrivacyAndPolicy number={num}></PrivacyAndPolicy>
    <Form1></Form1>
  <FormPractise></FormPractise>
   
</div>
   
     
     
    // </div>
  )
}

export default App;
