import "./posters.css"

export default function Posters() {
  return (
    <div className='posters container'>
        <div className="posters-community">

        <img className="posters-img"
        src="https://www.curamcare.com/themes/curam/assets/images/onboarding/poster__poster-body__illustration.png" alt="" />

        <h1 className="posters-heading">
            Kanva Care Community
        </h1>

        <p className="posters-para">
        Best pay with flexible working and you can further your qualifications with our free training courses
        </p>

        <button className="posters-btn">
            Become a Kanvacarer
        </button>

        </div>

        <div className="posters-partnership">

        <img className="posters-img" 
        src="https://www.curamcare.com/themes/curam/assets/images/onboarding/poster__poster-body__illustration-1.png" alt="" />

        <h1 className="posters-heading">
            Kanva Care Partnership
        </h1>

        <p className="posters-para">
        Quickly source and administer all your healthcare workers on one platform. Largest online marketplace for verified carers        
        </p>

        <button className="posters-btn">
            Become our business partner
        </button>

        </div>
        
    </div>
  )
}
