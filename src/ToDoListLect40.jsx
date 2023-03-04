import React, { useState } from "react";
import ToDo from "./ToDo";


const ToDoListLect40 =()=>{
    
    const [inputList,setinputList] = useState("Buy Apples");
    const [Items,setItems] =useState([]);

    const itemEvent = (event) =>{
        setinputList(event.target.value);

    };
    
    const listOfItems = () => {
        setItems((oldItems) => {
            return[...oldItems,inputList];
        })
        setinputList('');

    };
    const deletItems =()=>{
        console.log("deleted");
    }

    

    return(

   
    <>
  
     <div className="main_div">
        <div className="center_div">
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input  type="text" placeholder="Add items" 
            value={inputList}
            onChange={itemEvent}/>
            <button onClick={listOfItems}> +</button>
             <ol>
                {/* <li>{inputList}</li> */}
               
               { Items.map((itemval,index)=>{
                
                return(
                    <ToDo
                    key ={index}
                    id={index}
                    text={itemval}
                    onSelect={deletItems}
                    />
                )
                })}

             </ol>
        </div>      
    </div>
    </>
     )
}







export default ToDoListLect40;