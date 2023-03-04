import React from "react";
;
function Lect19App (){
    let CurDate = new Date(2023,2,25,18);
    CurDate = CurDate.getHours();
    let greeting ="";
    const cssStyle = {};
    
    if (CurDate >= 1 && CurDate <12){
        greeting = "Good Morning";
        cssStyle.color="green"
    }else if(CurDate >=12 && CurDate<19){
        greeting ="Good Afternoon"
        cssStyle.color="orange"
    }else{
        greeting="Good Night";
        cssStyle.color="pink";
    }


return(
    <>
    <div>
    <h1>
    Asslam o Alikum <span style={cssStyle}> {greeting}</span>
</h1> 

    </div>
    </>
);}
export default Lect19App;