import React, { createContext } from "react";
// import ComponentA from './ComponentA';
import ComponentC from './ComponentC';

const FirstName = createContext();
const LastName = createContext();

const UseContext = () =>{
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
export default  UseContext;
export {FirstName,LastName};