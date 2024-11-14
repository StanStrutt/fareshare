import React from "react";
import "./Faresharelogo.css"
import { Socialmedia } from "./Social-media";

function Faresharelogo() {
    return (
        <div className="LogoContainer">
            <div className="LogoBox">
                <div className="Logo">
                    <a href="/">
                        <img src="https://fareshare.org.uk/wp-content/uploads/2019/07/fs-logo.jpg" alt="Fareshare logo"/>
                    </a>
                </div>
                    <div className="Icons-right">
                        <div className="Banner-buttons">
                            <Socialmedia social="Social-media" linkedname="linked-in" twittername="twitter" facebookname="facebook" instaname="instagram"/>
                            <div className="Vol-dono">
                                <ul className="circle-buttons">
                                    <li className="green-button">
                                        <a href="https://fareshare.org.uk/volunteer/">volunteer</a>
                                    </li>
                                    <li className="red-button">
                                        <a href="https://fareshare.org.uk/costoflivingcrisisappeal1/">Donate</a>
                                    </li>
                                </ul>                                                      
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Faresharelogo