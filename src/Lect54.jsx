import React, { useEffect, useState } from "react";

const Lect54 =()=>{
    
    const [num,setNum] = useState(0);

    useEffect(()=>{
        // alert("Hi");
        document.title=` you clicked me ${num} times`
    })

    return<button onClick={()=>{
        setNum(num+1)
    }}> Click  Me {num}</button>
}

export default Lect54;