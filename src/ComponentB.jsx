import React, { useContext } from "react";
import ComponentC from './ComponentC';
import { FirstName ,LastName} from "./Context";


const ComponentB = () =>{
    
    const fname = useContext(FirstName);
    const lname = useContext(FirstName);

    return(  <h1>My name is {fname} {lname}</h1>
    
    );// <ComponentC/>
}
export default ComponentB;