import './footer.css';

export default function footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper container">
        <div className="footer-temp">
            <div className="footer-temp-data">
                <h1 className="footer-temp-title">Find a carer</h1>
                <p className="footer-temp-item">Search for a carer</p>
                <p className="footer-temp-item">Post a free job</p>
                <p className="footer-temp-item">Type of care</p>
                <p className="footer-temp-item">How it works</p>
                <p className="footer-temp-item">Cost calculator</p>
            </div>
            <div className="footer-temp-data">
                <h1 className="footer-temp-title">For carer</h1>
                <p className="footer-temp-item">Why work with us?</p>
                <p className="footer-temp-item">Find care jobs</p>
                <p className="footer-temp-item">Earnings calculator</p>
                <p className="footer-temp-item">Training courses</p>
                <p className="footer-temp-item">Perks & benefits</p>
            </div>
            <div className="footer-temp-data">
                <h1 className="footer-temp-title"> For business partners</h1>
                <p className="footer-temp-item">Why partner with us?</p>
                <p className="footer-temp-item">Get a demo</p>
            </div>
            <div className="footer-temp-data">
                <h1 className="footer-temp-title">Resources</h1>
                <p className="footer-temp-item">Blog</p>
                <p className="footer-temp-item">FAQs</p>
                <p className="footer-temp-item">Our policies</p>
                <p className="footer-temp-item">Terms & conditions</p>
            </div>
            <div className="footer-temp-data">
                <h1 className="footer-temp-title">Company</h1>
                <p className="footer-temp-item">About us</p>
                <p className="footer-temp-item">Testimonials</p>
            </div>
        </div>
        <div className="footer-main">
            <div className="footer-main-one">
                <div className="footer-main-logogrid">
                    <h1 className="footer-main-logogrid-logo">
                        KanvaCare
                    </h1>
                    <div className="footer-main-logogrid-items">
                    <p>Excellent rating img</p>
                    <p> Based on 286 reviews</p>
                    <p>Trustpilot_brandmark</p> 
                    </div>
                </div>
                <div className="footer-main-copyright">
                    © 2022 Kanva Care - All rights reserved.
                </div>
            </div>
            <div className="footer-main-two">
                <h1 className="footer-main-two-title">Download our app</h1>
                <div className="footer-main-two-btn">
                    <img 
                    src="https://www.curamcare.com/themes/curam/assets/images/onboarding/store-google.svg" alt="" className="footer-main-playstore" />
                    <img 
                    src="https://www.curamcare.com/themes/curam/assets/images/onboarding/store-ios.svg" alt="" />
                </div>
            </div>
            <div className="footer-main-three">
                <h1>Contact us</h1>
                <div className="footer-main-three-points">
                <i class="fa-regular fa-envelope"></i>
                <span>info@kanvacare.com</span>
                </div>
                <div className="footer-main-three-points">
                <i class="fa-solid fa-phone"></i>
                <span>01387 730766</span>
                </div>
                <div className="footer-main-three-points">
                <i class="fa-solid fa-location-dot"></i>
                <span>18 kisanpuri kotdwara UK</span>
                </div>
                                
                <div className="footer-main-three-icons">
                    <div className="circle">
                    <i class="footer-main-three-icon fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="circle">
                    <i class="footer-main-three-icon fa-brands fa-twitter"></i>
                    </div>
                    <div className="circle">
                    <i class="footer-main-three-icon fa-brands fa-instagram"></i>
                    </div>
                    <div className="circle">
                    <i class="footer-main-three-icon fa-brands fa-linkedin-in"></i>
                    </div>
                
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

