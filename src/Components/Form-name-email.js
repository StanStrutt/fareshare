import "./Form-name-email.css"

export default function Detailsform(props) {
    return (
        <div className="form-holder">
            <div className="first-name">
                <input className="first-input" placeholder="Your first name" type="text"/>
            </div>
            <div className="email-address">
                <input className="email-input" placeholder="Your email address"  type="text"/>
            </div>
            <input type="submit" value="Sign up" className={props.formClass}/>
        </div>
    )
}