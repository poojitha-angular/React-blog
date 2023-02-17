import { useState } from "react";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import '../css/home.css';
import Schemas from "./Schemas";



function Home() {
    const location = useLocation();
    const reqbody = location.state;
    const [dropdown, setdropdown] = useState(false);
    const [schemadrop,setSchemadrop]=useState(false);
    const [catalog, setcatalog] = useState([]);
    const [selectedcatalog, setselectedcatalog] = useState('');

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'withCredentials': true
    };

    const handleSchema = (catalog) => {
        setselectedcatalog(catalog);
        setSchemadrop(!schemadrop);
        console.log(selectedcatalog);
    };

    const handleCatalogs = () => {
        setdropdown(!dropdown)
        if (catalog.length === 0) {
            axios.post("http://localhost:8080/", reqbody, { headers: headers, cache: false })
            .then(response => {
                setcatalog(response.data)
                console.log(response.data)
            })
                .catch(error => {
                    console.log(error);
                })
        }

    }

    return (
        <div className="dropdown">
            <div className="menu-dropdown" onClick={handleCatalogs} >
                Catalogs
            </div>
            {dropdown &&
                <ul className="dropdown-list">

                    {catalog.map(catalogs => (
                        <div key={catalogs}>
                            <div className="catlogs-collections" onClick={() => handleSchema(catalogs)} style={{padding:"5px",margin:"5px"}}>
                                <li><i className="bi bi-database" style={{color:"#0d6efd"}}></i>{catalogs}</li>
                            </div>
                            { selectedcatalog === catalogs && schemadrop &&
                                <div className="ind-schema">
                                   <Schemas body={reqbody} eachcatalog={selectedcatalog}></Schemas>
                                  
                                </div>
                            }
                        </div>
                        
                    ))}
                </ul>
            }

        </div>
    )
} export default Home;