import React, { useState } from "react";


const Lecture33 = () => {
    const purple ="#8e44ad";

    const [bg, setbg]=useState(purple);
    const [name,setName] = useState('click me');


    const bgChange =()=>{
        // console.log('clicked');
      let newBg  = '#34495e';
      setbg(newBg);
      setName("ouch")

    };
    
    const bgback =()=>{
        setbg(purple);
        setName("GeoOY")
    };
return(
  
    <>

    <div style={{backgroundColor : bg}}>
        <button onMouseEnter={bgChange} onMouseLeave={bgback}>{name}</button>
    </div>
    </>

);

}

export default Lecture33;
