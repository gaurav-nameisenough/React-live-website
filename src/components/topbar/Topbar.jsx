import { useState } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";


export default function Topbar(props) {

  const [state,setState] = useState("fa-solid fa-bars");

  const [cond, setCond] = useState(false);

  const [secondcond, setSecondCond] = useState(false);
  
  const handleclick = ()=>{
    setState(state === "fa-solid fa-bars" ? "fa-solid fa-xmark" : "fa-solid fa-bars")
  }
  return (
    <div className="topbar">

        <div className="topbar-left">
          <i  className={`${state} topbar-toggler`} onClick={handleclick}></i>
         <span className="topbar-title"> <Link to="/" style={{color:"black",textDecoration:"none"}}>{props.title}</Link></span>
        </div>

        <div className="topbar-center" >
          <ul className={`${state === "fa-solid fa-bars" ? "" : "active"} topbar-list`}>
            <li onMouseEnter={()=> setCond(true)} onMouseLeave={()=> setCond(false)} className="topbar-listitem">Find a carer
            <i className="topbar-downarrow fa-solid fa-angle-down"></i>
            {
              cond && 
              <div className="topbar-listitem-box">
            <ul className="topbar-listitem-first">
              <li className="topbar-listitem-firstitem active"><h1>Type of Care</h1><p>Hire Carers based on duration</p></li>
              <li className="topbar-listitem-firstitem"><h1>Condition specific</h1><p>Hire Carers based on duration</p></li>
              <li className="topbar-listitem-firstitem"><h1>How it works</h1><p>Hire Carers based on duration</p></li>
              <li className="topbar-listitem-firstitem"><h1>Cost Calculator</h1><p>Hire Carers based on duration</p></li>
            </ul>
            <button className="topbar-listitem-btn">Post a job for free</button>
            </div>
            }
            </li>
            <li className="topbar-listitem" onMouseEnter={()=> setSecondCond(true)}
            onMouseLeave={()=> setSecondCond(false)}>For carers
            <i className="topbar-downarrow fa-solid fa-angle-down"></i>

            {
              secondcond && 
              <div className="topbar-listitem-box">
            <ul className="topbar-listitem-first">
              <li className="topbar-listitem-firstitem"><h1>Why become a Kanvacarer?</h1><p>Know about being a kanvacarer</p></li>
              <li className="topbar-listitem-firstitem"><h1>Find care job</h1><p>Know about being a kanvacarer</p></li>
              <li className="topbar-listitem-firstitem"><h1>Earning Calculator</h1><p>Know about being a kanvacarer</p></li>
            </ul>
            <button className="topbar-listitem-btn">Become a approved carer</button>
            </div>
            }

            </li>
            <li className="topbar-listitem">For business partners</li>
          </ul>
        </div>

        <div className="topbar-right">
          <Link to="/login"><button className="topbar-login" type="button">Login</button></Link>
          <Link to="/signup"><button className="topbar-gs" type="button">Get started</button></Link>
        </div>
        
    </div>
  )
}
