

export function Socialmedia(props) {
    return(
        <div className={props.social}>                               
            <a href="https://www.linkedin.com/company/fareshareuk" className={props.linkedname} target="_blank" rel="noreferrer">
                <img src="https://fareshare.org.uk/wp-content/uploads/2017/04/linked-in-desktop.png" alt="Linked in"/>
            </a>

            <a href="https://twitter.com/FareShareUK" className={props.twittername} target="_blank" rel="noreferrer">
                <img src="https://fareshare.org.uk/wp-content/uploads/2017/04/twitter-desktop.png" alt="Linked in"/>
            </a>

            <a href="https://www.facebook.com/UKFareShare" className={props.facebookname} target="_blank" rel="noreferrer">
                <img src="https://fareshare.org.uk/wp-content/uploads/2017/04/facebook-desktop.png" alt="Linked in"/>
            </a>
                                
            <a href="https://www.instagram.com/fareshareuk" className={props.instaname} target="_blank" rel="noreferrer">
                <img src="https://fareshare.org.uk/wp-content/uploads/2019/04/instagram.png" alt="Linked in"/>
            </a>
        </div>
    )
}