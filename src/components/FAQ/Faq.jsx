import Faqquestion from "../faqquestion/Faqquestion";
import "./faq.css";
import { allfaq } from "./faqallquestions";

export default function Faq() {
    
  return (
    <div className='faq'>
      <div className="faq-wrapper container">
      <h1 className="faq-title">
        FAQ
      </h1>
      <div className="faq-box">
        {
          allfaq.map((values,index)=>{
            return(
              <Faqquestion key={values.id} question={values.question} answer = {values.answer}/>
            )
          })
        }
      
      
      </div>
      <button className="faq-btn">View all</button>
      </div>
    </div>
  )
}
