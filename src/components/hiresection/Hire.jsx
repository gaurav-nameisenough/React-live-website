import "./hire.css";
import Hirecard from "../hirecard/Hirecard";

export default function Hire() {
  return (
    <div className='hiresection'>

        <div className="hiresection-wrapper container">

            <div className="hiresection-header">
                <h1 className="hiresection-title">
                 Hire experienced carers near you
                </h1>
                <div className="hiresection-bulletpoints">

                    <div className="hiresection-bulletpoint">
                    <i className="hiresection-bullet fa-solid fa-briefcase"></i>
                    <span className="hiresection-bulletpoint-para">
                        10 years' experience on average
                    </span>
                    </div>

                    <div className="hiresection-bulletpoint">
                    <i className="hiresection-bullet fa-solid fa-person-circle-check"></i>
                    <span className="hiresection-bulletpoint-para">
                        All carers are interviewed, ID and DBS checked
                    </span>
                    </div>
                    
                </div>
            </div>

            <div className="hiresection-cards row">
                <Hirecard />
                <Hirecard />
                <Hirecard />
                <Hirecard />
            </div>

            <button className="hiresection-btn">
                Hire now
            </button>

        </div>
      
    </div>
  )
}
