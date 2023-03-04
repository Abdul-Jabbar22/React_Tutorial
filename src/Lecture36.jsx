import React, { useState } from "react";



const Lecture36 =()=>{

    const [fullName,setFullName]= useState({
        fname : "",
        lname : "",

    });

    


    const onSubmits =(event)=>{
        event.preventDefault();
      
    };
    const inputEvent = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);

        
   const value = event.target.value;
   const name = event.target.name;

   setFullName((preValue)=>{

    //    console.log(preValue);
    if(name === "fName"){
   return{
    fname : value,
    lname : preValue.lname,
   };

    }else if(name ==="lName"){
        return{
            fname: preValue.fname,
            lname: value,
        };
    }
   })
    
    };

    return(

        <> 
        <div className="main_div">
        <form onSubmit={onSubmits}>
        <div>
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
        <input type="text"
         placeholder= "Enter you Name"
        name="fName"
        onChange={inputEvent}
        value={fullName.fname}
        
        />
      <br/>
        <input type="text"
         placeholder= "Enter you lastName"
         name="lName"
        onChange={inputEvent}
        value={fullName.lname}
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


export default Lecture36;