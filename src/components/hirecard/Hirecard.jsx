import "./hirecard.css"

export default function Hirecard() {
  return (
    <div className="hirecard">
        <div className="hirecard-wrapper ">
      <div className="hirecard-profile">
        <img className="hirecard-profile-img"
        src="https://www.curamcare.com/themes/curam/assets/images/onboarding/carer-card__card-header__photo__4.png" alt="" />
        <p className="hirecard-profile-name">Rachel L.</p>
      </div>

      <div className="hirecard-description">
        <div className="hirecard-experience">
        <i className="fa-solid fa-briefcase"></i>
        <span>14 year's experience</span>
        </div>
        <p className="hirecard-detail">
            Hello, my name is Rachel and I grew up in Dublin. I like to go foraging, camping and like to crochet presents for friends and family...
        </p>
      </div>

      <div className="hirecard-available">
        <div className="hirecard-available-hourly">
        <i className="hirecard-icon fa-solid fa-hourglass-start"></i>
        <span>Hourly</span>
        </div>
        <div className="hirecard-available-overnight">
        <i className="hirecard-icon fa-solid fa-moon"></i>
        <span>Overnight</span>
        </div>
      </div>

        </div>
    </div>
  )
}
