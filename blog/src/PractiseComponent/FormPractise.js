import React from "react";
import './css/formpractise.css'
class FormPractise extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
        <div className="main-ctn">
            <label>Url</label>
            <input type="text"  />
            <label>Username</label>
            <input type="text"/>
            <label>Password</label>
            <input type="text"/>
            <input type="submit" />
        </div>
        )
    }

}
export default FormPractise;