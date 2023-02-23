import Topbar from "../../components/topbar/Topbar";
import "./signup.css";

export default function Signup() {
  return (
    <>

    <Topbar title="Kanva-Care" />

    <div className="signup">
        <div className="signup-wrapper">
      <h1 className="signup-title">Sign up to post a free job</h1>
      <form className="signup-form">

        <div className="signup-form-data">
        <label>First name</label><br />
        <input type="text" placeholder="Enter first name" />
        </div>

        <div className="signup-form-data">
        <label>Last name</label><br />
        <input type="text" placeholder="Enter last name" />
        </div>
        

        <div className="signup-form-data">
        <label>Mobile</label><br />
        <input type="number" placeholder="Enter number"/>
        </div>
       
        <button className="signup-btn">Continue</button>
      </form>
      <p className="signup-condtions">
      By continuing, you agree to Curamcare’s 
      Terms & Conditions and its Privacy & Cookie Policies
      </p>
      <p className="signup-account">
      Already have an account?
        Login
      </p>
      </div>
    </div>
    </>
  )
}
