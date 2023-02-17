import '../css/login.css';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


function Login(){

  const navigate = useNavigate();
    const [data, setData] = useState({
      url: '',
      username: '',
      password: ''
    });
    
    const handleChange = event => {
      setData({ ...data, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = event => {
      event.preventDefault();

      axios.post('http://localhost:8080/get', data)
        .then(response => {
          console.log(response.data);
          navigate("/home",{state:data})
        })
        .catch(error => {
          alert(error)
          console.error(error);
        });
    };

    return(   
      <div>
           <form className="main-cntr" onSubmit={handleSubmit}>
            <div className="sub-cntr">
                <div className='top'>
                <input type="text" required name="url" placeholder="Enter server name" className="input-type" onChange={handleChange} />
                </div>
                <div className='middle'>
                <input type="text" required name= "username" placeholder="Enter username" className="input-type" onChange={handleChange} />
                
                </div>
                <div className='bottom'>
                <input type="password" required name="password" placeholder="Enter password" className="input-type" onChange={handleChange} />
                </div>
                <div className="bottom">
                <button type="submit" className="btn btn-outline-primary">Connect</button>
                </div>
            </div>
        </form>
       
        </div>
    );
}  
export default Login;
