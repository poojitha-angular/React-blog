import axios from "axios";
import { useState } from "react";
import '../css/schema.css';
import Columns from "./Columns";

function Tables(props) {
    const catalog = props.catalog;
    const schema = props.schema;
    const [tableopen, settableopen] = useState(false);
    const [colOpen, setColOpen] = useState(false);
    const url = "http://localhost:8080/" + catalog + "/" + schema;

    const [tables, settables] = useState([]);
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'withCredentials': true
    };

    const showTables = () => {
        settableopen(!tableopen);
        axios.post(url, props.body, { headers: headers, cache: false })
            .then((response) => {
                if (response.data.length !== 0) {
                    const tableNames = response.data
                        .filter(table => table.table_type === 'BASE TABLE')
                        .map(table => table.table_name);
                    settables(tableNames);
                    console.log(tableNames);
                }
                else {
                    console.log("No tables found");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleColumns = (table) => {
        setselectedtable(table);
        setColOpen(!colOpen);
    }

    const [selectedtable, setselectedtable] = useState('');

    return (
        <div>
            <div onClick={showTables} className="table_name">
                Tables
            </div>
            {tableopen && (
                <div>
                    {tables.map(table => (
                        <div key={table} className="table_collections">
                            <div className="table_data" onClick={() => handleColumns(table)}>
                                <i className="bi bi-table" style={{ color: "#0d6efd"}}></i>{table}
                            </div>
                            {colOpen && selectedtable === table &&
                                <div>
                                    <Columns body={props.body} header={props.header} url={url} table={table}></Columns>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Tables;
