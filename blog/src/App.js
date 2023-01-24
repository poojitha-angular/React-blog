import logo from './logo.svg';


import Card from './components/Card';
import Contactus from './components/Contactus';
import Header from './components/Header';



function App() {
  let title=["ChatGPT","Covid","Cricket","India","Iphone"]
  let card_details=[
    {
      title:"ChatGPT",
      desc:"Ai-tool"
    },
    {
      title:"Covid",
      desc:"Medicines"
    },
    {
      title:"Cricket",
      desc:"Matches"
    },
    {
      title:"India",
      desc:"Republicon Country"
    },
    {
      title:"Ipone",
      desc:"Apple Company"
    }

  ]
  return (
    <div className="App">
   {/* <Header ite="Nonveg"></Header>
   <Header ite="Veg"></Header>
   <Header ite="Nonveg"></Header> */}
    <Header></Header>  
     <div class="content-ctn">
     <Card ite={card_details[0].title} ></Card>
     <Card ite={card_details[1].title} ></Card>
     <Card ite={card_details[2].title}></Card>
     <Card ite={card_details[3].title}></Card>
     <Card ite={card_details[4].desc } ></Card>
    </div> 
    <Contactus></Contactus>
    </div>
  )
}

export default App;
