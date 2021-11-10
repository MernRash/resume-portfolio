import React, { Component } from "react";
import "./resume.css";
import Resume_img from "../images/resume.png";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

class Resume extends Component {
  render() {
    return (
      <>
        <div className="head" id="Resume">
          <span>Resume</span>
        </div>
        <div className="resume-container">
          <div className="resume-container">
            <div className="info-resume-container">
              <div className="experience-container">
                <h3>Work Experience</h3>
                <hr />
                <div className="experience-text">
                  <div className="flex">
                    <div>
                      <h4>Digital Marketing Intern - Full Time</h4>
                      <p>Offshoots Books Pvt. Ltd., Delhi.</p>

                      <span>Jun '19 - Aug '19</span>
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <h4>Trainee UI Developer - Full Time</h4>
                      <p>Ratna Sagar Pvt. Ltd., Delhi.</p>
                    </div>
                    <span>Nov '20 - Mar '21</span>
                  </div>

                  <div className="flex">
                    <div>
                      <h4>UI Developer - Full Time</h4>
                      <p>Ratna Sagar Pvt. Ltd., Delhi.</p>
                    </div>
                    <span>Jul '21 - Present</span>
                  </div>
                </div>
              </div>
              <div className="education-container">
                <h3>Education</h3>
                <hr />
                <div className="education-text">
                  <div className="flex">
                    <div>
                      <h4>
                        Vivekananda Institute of Professional Studies, Delhi
                      </h4>
                      <p>Bachelor of Computer Application</p>
                    </div>
                    <span>2017-2020</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-img-box">
              <img src={Resume_img} alt="resume_vector" />
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/rahul-shrestha-207674170"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/rahulshrestha14/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
                {/* <a href="https://twitter.com/VirajMerai" target="_blank" rel="noreferrer"><AiFillTwitterCircle/></a> */}
                <a
                  href="https://github.com/MernRash"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Resume;
