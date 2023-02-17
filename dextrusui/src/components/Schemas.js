import axios from "axios";
import { useState } from "react";
import '../css/schema.css';
import Tables from "./Tables";
import Views from "./Views";

function Schemas(props) {
    const [schemas, setSchemas] = useState([]);
    const [selectedschema, setselectedschema] = useState('');
    

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'withCredentials': true
    };

    if (schemas.length === 0) {
        axios.post("http://localhost:8080/" + props.eachcatalog, props.body, { headers: headers, cache: false })
            .then((response) => {
                setSchemas(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const [schemaopen, setschemaopen] = useState(false);
    const handleSchema = (schema) => {
        setschemaopen(!schemaopen);
        setselectedschema(schema);

    }
    return (
        <>
            <div>
                {schemas.map((schema) => (
                    <div>
                        <div class="schema-collection">
                            <div  style={{ margin: "5px", padding: "3px" }} onClick={() => handleSchema(schema)}>
                            {schemaopen && selectedschema === schema ? (
                                    <i class="bi bi-dash-square-fill" style={{ color: "#0d6efd" }}> </i>
                                ) : (
                                    <i class="bi bi-file-plus-fill" style={{ color: "#0d6efd" }}> </i>
                                )}
                                {schema}
                            </div>
                            {schemaopen && selectedschema === schema && (
                                <div>
                                    <Tables body={props.body} catalog={props.eachcatalog} schema={selectedschema} ></Tables>

                                    <Views body={props.body} catalog={props.eachcatalog} schema={selectedschema} ></Views>
                                </div>

                               
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
} export default Schemas;
