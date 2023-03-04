import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const ToDoList =()=>{

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
                    
                <Tooltip title="Add">
                     <Button onClick={inNum} className="btn_green">
                         <AddIcon/>
                         </Button> 
                         </Tooltip>
                    
                    <Tooltip title="Delete">
                    <Button onClick={deNum}className="btn_red">
                    <DeleteIcon/>
                     </Button>  
                     </Tooltip>
                </div>

            </div>

        </div>
        </>
    )
}



export default ToDoList;