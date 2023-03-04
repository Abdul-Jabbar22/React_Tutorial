import React, { useState } from "react";
// import AddIcon from '@material-ui/icons/Add';

const Lecture41 =()=>{

    const [num,setNum] =useState(0);
    const inNum = () =>{
        setNum(num+1)
    };
    const deNum = ()=>{
        if(num>0){
            setNum (num -1)
        }else{
            alert("Sorry you cant go beyoun Zero")
            setNum(0)
        }
        
    }
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <h1>{num}</h1>
                <div className="button_div">
                    <button onClick={inNum}>Increm</button>
                    <button onClick={deNum}>Decrem </button>

                </div>

            </div>

        </div>
        </>
    )
}



export default Lecture41;