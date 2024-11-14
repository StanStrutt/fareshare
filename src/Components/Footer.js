import React from "react";
import "./Footer.css"
import { Datatoggle } from "./Data-toggle";
import Detailsform from "./Form-name-email";
import Footermenu from "./footer-menu";

export default function FSFooter() {
    return(
        <footer>
            <div className="fsfooter">
                <div className="footer-objects">
                    <div className="text-links-button">
                        <div className="text-links-border">
                            <div className="fs-sign-up">
                                <h3>Stay connected!</h3>
                                <div className="under-h3">
                                    <p height="44.729px">FareShare Bites is our email newsletter. We will send you news, volunteering <br></br>
                                    opportunities and other updates around once a month.
                                    </p>
                                    <Detailsform formClass="footer-form"/>
                                    <Datatoggle />
                                    <p className="spacer-sentence"/>
                                </div>
                            </div>
                        </div>
                        <div className="footer-links-cont">
                            <div className="footer-links">
                                <div className="links-col">
                                    <div className="left-links-col">
                                        <ul className="left-links">
                                            <Footermenu thelink="https://fareshare.org.uk/contact-us/" thetext="Contact us" border="liborder"/>
                                            <Footermenu thelink="https://fareshare.org.uk/donate/" thetext="Donate" border="liborder"/>
                                            <Footermenu thelink="https://fareshare.org.uk/what-we-do/our-impact/" thetext="Our impact" border="liborder"/>
                                            <Footermenu thelink="https://fareshare.org.uk/getting-food/" thetext="Get Food" border="liborder"/>
                                            <Footermenu thelink="https://fareshare.org.uk/news-media/news" thetext="News" border="liborder"/>
                                            <Footermenu thelink="https://fareshare.org.uk/what-we-do/" thetext="What We Do" border="liborder"/>
                                            <Footermenu thelink="https://fareshare.org.uk/what-we-do/our-people/" thetext="Meet the team" border="liborder"/>
                                            <Footermenu thelink="https://fareshare.org.uk/dignity-policy-complaints-procedure/" thetext="Dignity & Complaints policy" border="nobord"/>
                                        </ul>
                                    </div>
                                </div>
                                <div className="links-col">
                                    <div className="right-links-col">
                                        <ul className="right-links">
                                            <Footermenu thelink="http://fareshare.org.uk/volunteer" thetext="Volunteer" border="liborder"/>
                                            <Footermenu thelink="https://fareshare.org.uk/giving-food/" thetext="Give food" border="liborder"/>
                                            <Footermenu thelink="https://fareshare.org.uk/getting-food/" thetext="FareShare Go" border="liborder"/>
                                            <Footermenu thelink="https://apply.workable.com/fareshare/" thetext="Careers" border="liborder"/>
                                            <Footermenu thelink="https://fareshare.org.uk/privacy-policy/" thetext="Privacy Policy" border="liborder"/>
                                            <Footermenu thelink="https://fareshare.org.uk/news-media/news/diversity-and-equality-statement/" thetext="Diversity and Equality" border="liborder"/>
                                            <Footermenu thelink="https://fareshare.org.uk/health-safety-policy/" thetext="Health & Safety Policy" border="nobord"/> 
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-symbols-texts">
                        <div className="footer-hr">
                            <hr/>
                        </div>
                        <div className="footer-icons">
                            <img className="footer-image-1" src="https://fareshare.org.uk/wp-content/themes/project-fareshare/img/logo-white.png" alt=""/>
                            <img className="footer-image-2" src="https://fareshare.org.uk/wp-content/themes/project-fareshare/img/fr-logo.jpg" alt=""/>
                        </div>
                        <div className="phone-number">
                            <p>FareShare is a registered charity in England & Wales  
                            (1100051) and Scotland (SC052672)
                            </p>
                        </div>
                        <div className="copyright">
                            <p>© 2024 FareShare</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}