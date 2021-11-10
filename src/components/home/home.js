import React,{Component} from 'react';
import BannerImg from '../images/banner.png';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import './home.css'


class Home extends Component{
    render(){
        return(
            <div className="banner-container" id="Banner">
                <div className="detail-container">
                    <h1>Hi, I'm Rahul Shrestha<br/><span>A Front-end Developer</span></h1>
                    <br/>
                    <p>Get ready to turn ideas into reality</p>
                    <div className="div-buttons">
                        <button className="btn hire"><ScrollLink spy={true} smooth={true} duration={1000}  to ="Contact">Hire Me</ScrollLink></button>
                        <button className="btn resume"><Link to ="Resume.pdf" target="_blank" download>Get Resume</Link></button>
                    </div>
                </div>
                <div className="banner-img-container">
                    <img src={BannerImg} alt="banner-img"></img>
                </div>
            </div>
        )
    }
}

export default Home;