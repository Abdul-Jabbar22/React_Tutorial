import React from "react";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";

const Lect56 =()=>{
    return(
       <>
<Router>
    <Routes>

        <Route exact path="/" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />




</Routes>

</Router>
       
        </>
    )
}
export default Lect56;