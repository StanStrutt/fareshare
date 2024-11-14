import "./what-we-do.css"
import Sections from "../Components/what-we-do-rows"
import Faresharelogo from "../Components/Faresharelogo";
import Banner from "../Components/Banner";
import DropDownMenu from "../Components/DropDownMenu";
import FSFooter from "../Components/Footer";
import { CBreadcrumb, CBreadcrumbItem } from "@coreui/react"
import '@coreui/coreui/dist/css/coreui.min.css'
import "../Components/DropDownMenu.css"


function Whatwedo() {
    const vars = { 
        "--cui-breadcrumb-divider": "'>'" ,
        "--cui-breadcrumb-item-active-color": "#adadad" ,
      }
    return (
        <div className="What-we-do">
            <div className="Components">
                <Banner />
                <Faresharelogo />
                <div className="breaddrop">
                    <DropDownMenu />
                    <div className="bg-breadcrumb">
                        <div className="widthbox">
                            <CBreadcrumb className="breadcrumb-custom" style={vars}>
                                <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
                                <CBreadcrumbItem active>What We Do</CBreadcrumbItem>
                            </CBreadcrumb>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Whatwedo">
                <div className="what-we-do-cont">
                    <div className="what-we-do">
                        <div className="what-we-do-pad">
                            <div className="what-we-do-text">
                                <h1>What We Do</h1>
                                <p className="food-waste">
                                    We believe that no good food should go to waste.
                                    <br/>
                                    We redistribute surplus food to charities that turn it into meals.
                                </p>
                                <hr/>
                                <h2>FareShare’s work in 2023-24</h2>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="images-container">
                    <div className="images-row">
                        <div className="images-padding">
                            <div className="images-content">
                                <div className="row-1">
                                    <Sections link="http://fareshare.org.uk/wp-content/uploads/2023/04/Food-Icon-green-bg.png" headline="56,000" subline="tonnes of food redistributed"/>
                                    <Sections link="http://fareshare.org.uk/wp-content/uploads/2023/04/Charity-icon-pink-bg.png" headline="8,000" subline="local charities served"/>
                                </div>
                                <div className="row-2">
                                    <Sections link="http://fareshare.org.uk/wp-content/uploads/2023/04/People-icon-blue-bg.png" headline={
                                        <div className="third-text">
                                            <p className="nearly-section">Nearly</p>
                                            <p className="one-million">1 million people</p>
                                        </div>
                                            
                                    } subline="reached"/>
                                    <Sections link="http://fareshare.org.uk/wp-content/uploads/2023/04/CO2e-icon-yellow-bg.png" headline="2 tonnes" 
                                    subline={
                                        <p>
                                            CO
                                            <sub>2</sub>
                                            e prevented from waste with every tonne of surplus food redistributed
                                        </p>
                                    }/>
                                </div>
                                <div className="learn-more-container">
                                    <div className="learn-more">                             
                                        <p className="learn-more-text">
                                            <a className="impact-button" href="/what-we-do/our-impact/">
                                            Learn more about our impact</a>
                                        </p>
                                    </div>  
                                </div>
                                <div className="spacer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <FSFooter />
        </div>
    )
}

export default Whatwedo