import React from "react";


function Cards(props){

    return(
<div className="cards">
    <div className="card">
        <img src={props.imgsrc} alt="mypic" className="card_img"/>
        <div className="class_info">
            <span className="card_category">{props.title}</span>
              <h3 className="card_title"> {props.sname}</h3>
              <a href="" target="_blank"></a>
              <button>Watch Now</button>
        </div>

    </div>

</div>

    )
}
export default Cards;