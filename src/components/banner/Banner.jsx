import "./banner.css";

export default function Banner() {
  return (
    <div className="banner container">

        <div className="banner-description">

            <h1 className="banner-title">
                Find a carer your <br/> family will love
            </h1>

            <p className="banner-detail">
            Tell us your care requirements and hire verified carers 
            </p>

            <button className="banner-gs" type="button">
                Get started
            </button>

        </div>
      
        <img className="banner-img"
        src="https://www.curamcare.com/themes/curam/assets/images/onboarding/banner-image-curam.webp" alt="" />

    </div>
  )
}
