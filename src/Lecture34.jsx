import React, { useState } from "react";



const Lecture34 =()=>{

    const [name,setName]= useState("");
    const [fullName,setfullName]= useState();


    const inputEvent =(event)=>{
        console.log(event.target.value);
        setName(event.target.value);

    };
    const onSubmit = () =>{
        setfullName(name);
    }

    return(

        <> 
        
        
        <div>
            <h1>Hello{fullName}</h1>
        <input type="text" placeholder= "Enter you Name"
        onChange={inputEvent}
        value={name}
        />
        <h2>
        <button onClick={onSubmit} >Click Me</button>
        </h2>
        </div>
        </>
    )
}


export default Lecture34;