import "./relationship.css";

export default function Relationship() {
  return (
    <div className="relationship">
        <div className="relationship-wrapper container">
            <h1 className="relationship-title">
            Your relationship with your carer is <br />
            at the heart of everything we do
            </h1>
            <div className="relationship-content">
                <div className="relationship-options">
                    <div className="relationship-option">
                    <div className="relationship-option-icons">
                    <i class="relationship-option-icon fa-solid fa-gem"></i>
                    </div>
                    <span className="relationship-option-title">
                    Trusted carers
                    </span>
                    <p className="relationship-option-para">
                        Client safety is the number one priority at Curam
                    </p>
                    </div>
                    <div className="relationship-option">
                    <div className="relationship-option-icons">
                    <i class="relationship-option-icon fa-solid fa-gem"></i>
                    </div>
                    <span className="relationship-option-title">
                    Choice and control
                    </span>
                    <p className="relationship-option-para">
                        Freedom of choice is at the core of the Curam model
                    </p>
                    </div>
                    <div className="relationship-option">
                    <div className="relationship-option-icons">
                    <i class="relationship-option-icon fa-solid fa-gem"></i>
                    </div>
                    <span className="relationship-option-title">
                    Speed
                    </span>
                    <p className="relationship-option-para">
                        Find and hire a carer in minutes
                    </p>
                    </div>
                    <div className="relationship-option">
                    <div className="relationship-option-icons">
                    <i class="relationship-option-icon fa-solid fa-gem"></i>
                    </div>
                    <span className="relationship-option-title">
                    Value
                    </span>
                    <p className="relationship-option-para">
                        You pay less but your carer earns more
                    </p>
                    </div>
                </div>
                <div className="relationship-chats">
                    <span className="relationship-chat">
                        “Makes you feel at ease”
                    </span><br />
                    <span className="relationship-chat rightit">
                        “She makes my mum smile.”
                    </span><br />
                    <span className="relationship-chat">
                        “Efficient, practical and caring”
                    </span><br />
                    <span className="relationship-chat rightit">
                        “She is hard working and a delight.”
                    </span><br />
                    <span className="relationship-chat">
                        “She could not have been more patient.”
                    </span>
                </div>
            </div>
            <button className="relationship-btn">Post a job for free</button>
        </div>
    </div>
  )
}
