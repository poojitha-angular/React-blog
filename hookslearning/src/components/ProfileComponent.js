import { useContext, useState } from "react";
import { LoginContext } from "./context/ParentContext";

function ProfileComponent(){
    const {name} = useContext(LoginContext)
    return(
        <div>
            <h2>This is a profile page</h2>
            <h3>{name}</h3>
        </div>

    )
}export default ProfileComponent;