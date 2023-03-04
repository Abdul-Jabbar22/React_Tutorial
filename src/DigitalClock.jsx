import React, { useState } from "react";
// import React from "react";

const DigitalClock = () =>{


    let time = new Date().toLocaleTimeString();

    const [ctime,setCtime] = useState(time);

    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(UpdateTime,1000)
    return(


        <>
          <h1>
            {ctime}
          </h1>
          {/* <button onClick={UpdateTime}>Get Time</button>  */}
                  </>
    );
}
export default DigitalClock;