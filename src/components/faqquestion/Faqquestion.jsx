import "./faqquestion.css";
import { useState } from "react";

export default function Faqquestion(props) {
    const [sign,setSign] = useState("fa-solid fa-plus");
    const handlesign = ()=>{
        setSign(sign === "fa-solid fa-minus" ? "fa-solid fa-plus" : "fa-solid fa-minus");
    }
  return (
    <div className="faq-question">
      <div className="faq-question-box">
        <i className={sign} onClick={handlesign}></i>
        <span className="faq-question">
         {props.question}
        </span>
        </div>

        <div className={`faq-ans-box ${sign === "fa-solid fa-minus" ? "active" : ""}`}
        >
          <p>
            {props.answer}
          </p>
        </div>
      </div>
  );
}
