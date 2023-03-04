import React, { useState } from "react";



const Lecture39 =()=>{

    const [fullName,setFullName]= useState({
        fname : "",
        lname : "",
        email: "",
        phone: "",
        qua : "",

    });

    


    const onSubmits =(event)=>{
        event.preventDefault();
        alert("Form Submitted")
      
    };
    const inputEvent = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);
  const {value,name}=event.target;
        
//    const value = event.target.value;
//    const name = event.target.name;

   setFullName((preValue)=>{

    return{
        ...preValue,
       [ name ]:value,
    }
    //    console.log(preValue);
//     if(name === "fName"){
//    return{
//     fname : value,
//     lname : preValue.lname,
//     email : preValue.email,
//     phone : preValue.phone,
//    };

//     }else if(name ==="lName"){
//         return{
//             fname: preValue.fname,
//             lname: value,
//             email : preValue.email,
//             phone : preValue.phones
//         };
//     }
//     else if(name ==="email"){
//         return{
//             fname: preValue.fname,
//             lname: preValue.lname,
//             email :  value,
//             phone : preValue.phone
//         };
//     }
//     else if(name ==="phone"){
//         return{
//             fname: preValue.fname,
//             lname:  preValue.lname,
//             email : preValue.email,
//             phone : value,
//         };
//     }
    
    
   });
    
    };

    return(

        <> 
        <div className="main_div">
        <form onSubmit={onSubmits}>
        <div>
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <p>{fullName.qua}</p>
        <input type="text"
         placeholder= "Enter you Name"
        name="fname"
        onChange={inputEvent}
        value={fullName.fname}
        
        />
      <br/>
        <input type="text"
         placeholder= "Enter you lastName"
         name="lname"
        onChange={inputEvent}
        value={fullName.lname}
        />
             <br/>
         <input type="email"
         placeholder= "Enter you email"
         name="email"
        onChange={inputEvent}
        value={fullName.email}
        />
             <br/>
         <input type="number"
         placeholder= "Enter you phone"
         name="phone"
        onChange={inputEvent}
        value={fullName.phone}
        />
              <br/>
         <input type="text"
         placeholder= "Enter you qualification"
         name="qua"
        onChange={inputEvent}
        value={fullName.qua}
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


export default Lecture39;