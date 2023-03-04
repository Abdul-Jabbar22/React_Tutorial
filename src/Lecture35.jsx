import React, { useState } from "react";



const Lecture35 =()=>{

    const [name,setName]= useState("");

    const [lastName,setLastName] = useState('');

    const [fullName,setfullName]= useState();

    const [lastNamenew,setLastNameNew] = useState("");


    const onSubmits =(event)=>{
        event.preventDefault();
        setfullName(name);
        setLastNameNew(lastName);
        // console.log(event.target.value);
        // setName(event.target.value);

    };
    const inputEvent = (event) =>{
        console.log(event.target.value);
        setName(event.target.value);

        // setfullName(name);
    };

    const inputEvent2 = (event) =>{
        setLastName(event.target.value)
    }

    return(

        <> 
        <div className="main_div">
        <form onSubmit={onSubmits}>
        <div>
            <h1>Hello{fullName} {lastNamenew}</h1>
        <input type="text"
         placeholder= "Enter you Name"
        onChange={inputEvent}
        value={name}
        
        />
      <br/>
        <input type="text"
         placeholder= "Enter you lastName"
        onChange={inputEvent2}
        value={lastName}
        />
        <h2>
        <button type="submit" >Click Me</button>
        </h2>
        </div>
        </form>
        </div>
        </>
    )
}


export default Lecture35;