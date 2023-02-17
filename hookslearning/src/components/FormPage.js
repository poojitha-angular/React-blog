import './css/formpage.css'
import {useContext, useState} from 'react'
import { LoginContext } from './context/ParentContext'

function FormPage(){
     const {setname,setprofile} = useContext(LoginContext)

    // const [name,setname]=useState(' ')
    const handleInputChangename=(event)=>{
        setname(event.target.value)
    }
    // const handleSubmit=(event)=>{
    //     event.preventDefault();
    // }
    
    return (

        <div>
           
        <div class="container"> 
            {/* <label>Url : </label>   
            <input type="text" placeholder="Enter Url" name="url" required />    */}
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required  onChange={handleInputChangename}/>  
          
            <button type="submit" onClick={()=>setprofile(true)}>Login</button>   
           
        </div>   
       
        </div>
    )
}
export default FormPage;