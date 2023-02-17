import axios from "axios";
import { useState } from "react";
import  Columns from "./Columns";
import '../css/schema.css';

function Views(props){

    const catalog = props.catalog;
    const schema = props.schema;
    const url= "http://localhost:8080/" +catalog + "/" +schema;

    
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'withCredentials': true
    };
    const [views, setviews]=useState([]);
    const [viewopen, setviewopen]=useState(false);
    const [selectedview,setselectedview]=useState('');
    const [colOpen, setColOpen] = useState(false);
    

    const showViews=()=>{
        setviewopen(!viewopen)
        axios.post(url, props.body, { headers: headers, cache: false })
        .then((response) => {
            if (response.data.length !== 0) {
                const tableNames = response.data
                .filter(table=>table.table_type === 'VIEW')
                .map(table=>table.table_name);
                setviews(tableNames);
            console.log(tableNames);
            }
            else{
                console.log("No tables found");
            }
            
            
        })
        .catch((error)=>{
            
            console.log(error);
        })

    }
    const handleColumns = (view) => {
        setselectedview(view);
        setColOpen(!colOpen);
    }
    
    return(
        <div>
            <div onClick={showViews} className="view-name">
                Views
            </div>
            {viewopen && (
                 <div>
               {views.map(view => (
             <div key={view} className="table_collections">
                 <div className="table_data" onClick={() => handleColumns(view)}> <i class="bi bi-table" style={{ color: "#0d6efd" }}> </i>{view}
                 </div> 
                 {colOpen && selectedview === view &&(
                     <Columns body={props.body} header={props.header} url={url} table={view}></Columns>
                 )}         
             </div>
                ))}

            </div>
            )}
                   
            
        </div>

    )
}export default Views;