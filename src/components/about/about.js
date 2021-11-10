import React,{Component} from 'react';

import About_Img from "../images/about_me.png"
import Html_Img from "../images/html-logo.png"
import Css_Img from "../images/css-logo.png"
import JS_Img from "../images/js-logo.png"
import React_Img from "../images/react-logo.png"
import Git_Img from "../images/github-logo.png"
import Netlify_Img from "../images/netlify-logo.png"
import './about.css'

class About extends Component{
    render(){
        return(
            <div className="About-me-image" id='About'>
                <div className="img-about">
                    <img src={About_Img} alt="about-img"></img>
                </div>
                <div className="About-me-text">
                    <span>About Me</span>
                  
                    <p>I am Web Designer or Front-end Developer with 10 Months of Training Experience. I'm Interested in all kinds of visual Communication, 
            but my Major focus is on designing web, mobile {"&"} tablet interfaces. i also have skills in other fields like branding, Digital Marketing,SEO and Web Development. </p>

            <p>I enjoy turning Complex problem into simple, beautiful and intutive designs. When i'm not pushing pixels, you'll find me cooking, gardening or Working out in park.</p>

                    
                    <div className="libraries-logo">
                        <h5>Languages/Library/Technology</h5>
                        <div className="libraries-logo-flex">
                            <img src={Html_Img} alt="html-logo"/>
                            <img src={Css_Img} alt="css-logo"/>
                            <img src={JS_Img} alt="js-logo"/>
                            <img src={React_Img} alt="react-logo"/>
                            <img src={Git_Img} alt="github-logo"/>
                            <img src={Netlify_Img} alt="netlify-logo"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;