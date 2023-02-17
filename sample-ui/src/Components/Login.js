import './css/login.css'
import {useState} from 'react'


function Login(){
    // const [url,seturl]=useState('')
    const [name,setname]=useState(' ')
    const [pwd,setpwd]=useState(' ')
    
   
    // const handleInputChangeurl=(event)=>{
    //         seturl(event.target.value)
    //        }
        const handleInputChangename=(event)=>{
            setname(event.target.value)
        }
        const handleInputChangepwd=(event)=>{
            setpwd(event.target.value)
           
        }
      const  handleSubmit=(event)=>{
            event.preventDefault();
            const json={
                // "url":url,
                "name":name,
                "pwd":pwd
            }
        console.log(json)

    };
    return(
        <div>
          
        <div class="container"> 
            {/* <label>Url : </label>   
            <input type="text" placeholder="Enter Url" name="url" required  />    */}
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required onChange={handleInputChangename} />  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required  onChange={handleInputChangepwd} />  
            <button type="submit">Login</button>   
            {/* <input type="checkbox" checked="checked" /> Remember me    */}
            <button class="cancelbtn"> Cancel</button>   
           
        </div>   
  
        </div>

    )
}
export default Login;