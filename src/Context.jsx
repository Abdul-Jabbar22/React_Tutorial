import React, { createContext } from "react";
// import ComponentA from './ComponentA';
import ComponentC from './ComponentC';

const FirstName = createContext();
const LastName = createContext();

const Context = () =>{
  return (
     <>
     <FirstName.Provider value={"  Abdul  "}>
      <LastName.Provider value={"Jabbar"}>


      <ComponentC/>
      </LastName.Provider>
     </FirstName.Provider>

     </>
  
 );
};
export default Context;
export {FirstName,LastName};