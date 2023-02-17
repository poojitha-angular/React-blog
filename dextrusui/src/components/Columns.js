import axios from "axios";
import { useState } from "react";

function Columns(props){
   
    const [columns,setcolumns]=useState([]);
    
    if(columns.length === 0){

        axios.post(props.url+ "/"+ props.table,props.body,{ headers:props.header,cache:false} )
        .then(response=>{
            if(response.data.length !== 0){
            setcolumns(response.data.map((column)=>column.columnName));
            console.log(response.data);
        }
          
        }).catch(error => {
            console.log(error);
        });
    }
    return(
        <div>{
            columns.map(column=>(
                <div>
                    <div className="columns-collections" > 
                    <i class="bi bi-layout-text-sidebar-reverse" style={{ color: "#0d6efd"}}></i>{column}</div>
                </div>
            ))
            }

        </div>
    )
}export default Columns;