import "./carertype.css";

export default function Carertype() {
  return (
    <div className="carertype">
      <div className="carertype-wrapper container">
        
        <h1 className="carertype-title">Find carers for all types of care</h1>

        <div className="carertype-content">

            <div className="carertype-hourly">
            <i class="carertype-icon fa-solid fa-hourglass-start"></i>
            <h1 className="carertype-heading">Hourly care</h1>
            <p>Post a job and find carers for all your needs</p>
            </div>

            <div className="carertype-overnight">
            <i class="carertype-icon fa-solid fa-moon"></i>
            <h1 className="carertype-heading">Overnight care</h1>
            <p>Find your carer for sleeping or waking nights</p>
            </div>

            <div className="carertype-livein">
            <i class="carertype-icon fa-solid fa-people-roof"></i>
            <h1 className="carertype-heading">Live-in care</h1>
            <p>Post your job to find specialist live-in carers</p>
            </div>

        </div>

        <button className="carertype-btn">Post a job for free</button>
      </div>
    </div>
  )
}
