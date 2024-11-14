import "./Footer.css"


export default function Footermenu(props) {
    return(
        <li className={props.border}>
            <a href={props.thelink}>{props.thetext}</a>
        </li>
    )
}