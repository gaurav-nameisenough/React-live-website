import Topbar from "../../components/topbar/Topbar";
import "./login.css";
// import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <>

    <Topbar title="Kanva-Care" />

    <div className="login">
        <span className="login-title">Log-In</span>
        <form className="login-form">
            <label>Email</label>
            <input type="text" className="login-input" placeholder="Enter your Email" />
            <label>Password</label>
            <input type="password" className="login-input" placeholder="Enter your Password"/>
            <button className="login-btn">Login</button>
        </form> 
        {/* <button className="login-register-btn">
          Register
            <Link className="link" to="/register">Register</Link>
        </button> */}
    </div>
    </>
  )
}
