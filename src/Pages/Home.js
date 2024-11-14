import "./Home.css"
import Faresharelogo from '../Components/Faresharelogo';
import Banner from "../Components/Banner"
import DropDownMenu from '../Components/DropDownMenu';
import FSFooter from "../Components/Footer";
import { Datatoggle } from "../Components/Data-toggle";
import "../Components/Footer.css"
import Detailsform from "../Components/Form-name-email";
import { Socialmedia } from "../Components/Social-media";




export default function Home() {



    return (
        <div className="Home">
            <Banner />
            <Faresharelogo />
            <DropDownMenu />
            <div className="home-page">
                <div className="tesco-collection">
                    <div className="tesco-collection-text">
                        <h3 className="collection-h3">Tesco Winter Food Collection</h3>
                        <p className="collection-vol">Volunteer in-store to collect food donations for your local community</p>
                        <p className="food-button">
                            <a href="https://fareshare.org.uk/foodcollection/">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
                <div className="stay-connected">
                    <div className="stay-connected-segment">
                        <div className="con-container">
                            <div className="connected-p">
                                <p>FareShare Bites is our email newsletter. We will send you news, 
                                volunteering opportunities and other updates around once a month.</p>
                                <Datatoggle />
                            </div>
                            <div className="connected-input-cont">
                                <div className="connected-input">
                                    <h3>Stay connected!</h3>
                                    <Detailsform formClass="home-form"/>
                                </div>
                            </div>
                            <div className="social-icons">
                                <Socialmedia social="social-inner" linkedname="linked-in-no-bord" twittername="twitter-no-bord" facebookname="facebook-no-bord" instaname="instagram-no-bord"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="what-who-section">
                    <div className="what-who-container">
                        <div className="what-who">
                            <div className="who-text">
                                <h1 className="who-h1">Who we are</h1>
                                <p className="who-p">FareShare is the UK’s national network of charitable food redistributors, made up of 18 independent organisations. 
                                Together, we take good quality surplus food from right across the food industry and get it to nearly 8,500 frontline charities and community groups.</p>
                            </div>
                            <div className="what-text">
                                <h1 className="what-h1">What we do</h1>
                                <p className="what-p">The food we redistribute is nutritious and good to eat. It reaches charities across the UK, including school breakfast clubs, older people’s lunch clubs, homeless shelters, and community cafes. Every week we provide enough food to create almost a million meals for vulnerable people.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-video">
                    <div className="hp-vid-container">
                        <div className="fs-video">
                            <iframe width="100%" height="630px" src="https://www.youtube.com/embed/LKLupMzNUdE" title="FareShare 'About Us'"
                             frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="">
                             </iframe>
                        </div>
                    </div>
                </div>
                <div className="latest-news-cont">
                    <div className="latest-news-title">
                        <h1>Latest News</h1>
                    </div>
                </div>
                <div className="latest-news-wrapper">
                    <div className="latest-news">
                        <div className="news-1">
                            <a href="https://fareshare.org.uk/news-media/news/enjoy-breakfast-your-way-this-autumn-with-nestle-and-fareshare/">
                                <img src="https://fareshare.org.uk/wp-content/uploads/2024/11/nestl-logo_49915638706_o-768x512.png" alt=""></img>
                                <h2>Enjoy Breakfast Your Way this autumn with Nestle and FareShare</h2>
                            </a>
                        </div>
                        <div className="news-2">
                            <a href="https://fareshare.org.uk/news-media/news/kpmg-uk-and-fareshare-launch-new-three-year-charity-partnership/">
                                <img src="" alt=""></img>
                                <h2>Budget must “address environmental harm of food waste”</h2>
                            </a>
                        </div>
                        <div className="news-3">
                            <a href="https://fareshare.org.uk/news-media/news/fareshare-announces-leadership-change-for-next-decade-of-impact/">
                                <img src="https://fareshare.org.uk/wp-content/uploads/2024/10/FS-logo-general-use-RGB-1-360x153.jpg" alt=""></img>
                                <h2>FareShare Announces Leadership Change For Next Decade Of Impact</h2>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="where-to-find-us">
                    <div className="where-to-find-us-container">
                        <div className="regional-centres">
                            <div className="regional-title">
                                <h1>FareShare Regional Centres</h1>
                            </div>
                            <div className="nearest-fs">
                                <form className="postcode" method="post" action="/fareshare-centres/">
                                    <h3>Find your nearest FareShare</h3>
                                    <input className="post-search" type="text" placeholder="Enter postcode"></input>
                                    <input className="post-button" type="submit" value="Search"></input>
                                </form>
                            </div>
                            <div className="cities-container">
                                <div className="cities-list">
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/central-and-south-east-scotland/">
                                            Central and South East Scotland</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/cymru-south-wales/">Cymru</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/east-anglia/">East Anglia</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/glasgow-west-of-scotland/">Glasgow & The West Of Scotland</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/grampian/">Grampian</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/greater-manchester/">Greater Manchester</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/hullandhumber/">Hull & Humber</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/kent/">Kent</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/lancashire-and-cumbria/">Lancashire & Cumbria</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/london/">London</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/merseyside/">Merseyside</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/midlands/">Midlands</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/north-east/">North East</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/northern-ireland/">Northern Ireland</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/south-midlands/">South Midlands</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/south-west/">South West</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/southern-central/">Southern Central</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/sussex/">Sussex & Surrey</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/tayside-and-fife/">Tayside & Fife</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/thames-valley/">Thames Valley</a>
                                        </div>
                                    </div>
                                    <div className="city-wrapper">
                                        <div className="city-border">
                                            <a href="https://fareshare.org.uk/fareshare-centres/yorkshire/">Yorkshire</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fs-logo-wrapper">
                    <div className="logo-top-wrapper">
                        <div className="logo-top">
                            <p> </p>
                            <div className="img-holder"> 
                                <img src="http://fareshare.org.uk/wp-content/uploads/2021/09/fdf21.jpg" width="118" height="111" alt=""/>
                            </div>
                            <div className="img-holder">
                                <img src="http://fareshare.org.uk/wp-content/uploads/2021/11/CharityTimesAwards2021-Winner-logo.jpg" width="167" height="110" alt=""/>
                            </div>
                            <div className="img-holder">
                                <img src="http://fareshare.org.uk/wp-content/uploads/2019/04/feba-logo-150x150.jpg" width="120" height="120" alt=""/>
                            </div>
                            <div className="img-holder">
                                <img src="http://fareshare.org.uk/wp-content/uploads/2019/08/GFN-Logo-Certified-Member-White-Background-300x124-2.jpg" width="255" height="105" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="logo-bottom-wrapper">
                        <div className="logo-bottom">
                            <p> </p>
                            <div className="img-holder">
                                <img src="https://www.fareshare.org.uk/wp-content/uploads/2018/09/registered-fundraising-regulator.png" width="255" height="103.767" alt=""/>
                            </div>
                            <div className="img-holder">
                                <img src="http://fareshare.org.uk/wp-content/uploads/2023/12/CTAwards2023-HighlyCommended.jpg" width="255" height="135" alt=""/>
                            </div>
                            <div className="img-holder">
                                <img src="http://fareshare.org.uk/wp-content/uploads/2023/12/Tesco.png" width="100" height="134" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        <FSFooter />
        </div>
    );
}