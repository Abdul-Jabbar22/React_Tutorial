import React, { useState } from "react";
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";

const App=()=>{
    const state = useState();
// console.log(state);
// creating an array 
// const name = ['Abdul',Jabbar','abu Safyan'];
// Array destructuring 
// const [name1,name2,name3] = name;

const [count,setCount]=useState(0);
// let count =1;
const IncNum =()=>{
   setCount(count + 1)
    console.log("clicked"+ count++);
};
    return(
<>
      <h1>{count}</h1>
      <button onClick={IncNum}>Click me</button>
</>
    )
}





export default App;