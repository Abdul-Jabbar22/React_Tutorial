
import React from "react";
import Sdata from "./Sdata";
import Cards from "./Cards";


const Netflix = ()=>{


return(
    <Cards 
    imgsrc ={Sdata[1].imgsrc}
    title = {Sdata[1].title}
    sname ={Sdata[1].sname}
    />
 
);
}

export default Netflix;