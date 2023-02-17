import './css/header.css'
import {useState} from 'react'

function Header(){

    var [runs,setruns]=useState(0)
    var [wickets,setwickets]=useState(0)
    var [balls,setballs]=useState(0)
    var [status,setstatus]=useState("match started")
    const six=()=>{
        if(wickets<=9){
      setruns(runs+6)
      setballs(balls+1)
        }
    }
    const four=()=>{
        if(wickets<=9){
        setruns(runs+4)
        setballs(balls+1)
        }
      }
    const three=()=>{
        if(wickets<=9){
        setruns(runs+3)
        setballs(balls+1)
        }
      }
      const two=()=>{
        if(wickets<=9){
        setruns(runs+2)
        setballs(balls+1)
        }
      }
      const one=()=>{
        if(wickets<=9){
        setruns(runs+1)
        setballs(balls+1)
        }
      }
      const changewickets=()=>{
        if(wickets<=9){
            setwickets(wickets+1)
            setballs(balls+1)
         } else{
            setstatus("Match ended")

         }       
         
      }
      
      
    return(
        <div className={"setruns"}>
            <h1>Welcome to IND vs NZ match</h1>
             <h2> IND: {runs}/{wickets}</h2>
             <h2>Balls:{balls}</h2>
            <button onClick={six}>6</button>
            <button onClick={four}>4</button>
            <button onClick={three}>3</button>
            <button onClick={two}>2</button>
            <button onClick={one}>1</button>

            <div>
                <button onClick={changewickets}>Out</button>
                <h2>{status}</h2>
            </div>

        </div>
    )
}
export default Header;