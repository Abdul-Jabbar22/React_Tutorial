
import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";


const Amazone = ()=>{


return(
    <Cards 
    imgsrc ={Sdata[4].imgsrc}
    title = {Sdata[4].title}
    sname ={Sdata[4].sname}
    />
 
);
}

export default Amazone;