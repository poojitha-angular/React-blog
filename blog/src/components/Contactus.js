import './css/contactus.css'
import {useState} from 'react'
import axios from 'axios'
function ContactUS(){
    var a=5;
            const call= ()=>{
                console.log("Welcome")
            }
           
      const [data,setdata]=useState(' ')
      for(let i=0;i<=10;i++){
        axios.get('https://jsonplaceholder.typicode.com/posts/').then(res=>{
            //   console.log('hi')
            //  var first=res.data.results[0].name.first
            //  var last=res.data.results[0].name.last
            //   setdata(first +' ' +last)
             setdata(res.data.title)
            })

      }
     
    return (
        <div>
            <div>
            <h3>{a}</h3>
            <h1>{data}</h1>
            </div>
         <form class="contact-form">
            <div class="top">
                <input type="text" placeholder="Enter name" class="type1"/>
                <input type="email" placeholder="Enter email" class="type1"/>
            </div>
            <div class="middle">
                <input type="text" placeholder="enter details" class="type2"></input>
            </div>
            <div class="bottom">
                <button type="submit" class="submit-btn" >Send</button>
            </div>
        </form>

        <button type="submit" class="submit-btn" onClick={call}>Click</button>
        
       
    </div>
    
    )

}
export default ContactUS;