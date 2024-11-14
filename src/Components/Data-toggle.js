import "./Footer.css"
import Expanding from "./Expanding";



export function Datatoggle() {

    const { isExpanded, toggleExpand, rightArrowUrl, downArrowUrl} = Expanding();


    return(
        <div className="data-holder">
            <div className="privacy-data" onClick={toggleExpand}>
                <img
                    src={isExpanded ? downArrowUrl : rightArrowUrl}
                    alt="arrow icon"
                    className="arrow-icon"
                />                                        
                <h3>How we use your data</h3>
            </div>           
            {isExpanded && (
            <div className="privacy-expanded-content">
                By signing up to our newsletter, you agree to receive regular emails
                from FareShare around once a month, and occasional fundraising appeal emails.
                You can unsubscribe from the newsletter at any time.
                We will not share your data with any other organisations.
                <a href="https://fareshare.org.uk/privacy-policy/"> Read our full privacy notice</a>                                   
            </div>
            )}
        </div>
    )
}    
