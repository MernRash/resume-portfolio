import React, { Component } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneInTalk, MdLocationPin } from "react-icons/md";
import swal from "sweetalert";
import emailjs from 'emailjs-com';

import "./contact.css";

class Contact extends Component {
  state = {
    name: "",
    contact: "",
    email: "",
    message:"",
  };

  messege = () => {
    swal({
      title: "Thank You! ",
      icon: "success",
      button: "Back",
    });
  };

  inputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleForm = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_paj1dwg', 'template_ztdn29w', e.target, 'yauCcxjD43YUEJV8O')
      .then((result) => {
          console.log(result.text);
          swal({
              title: "Thank You!",
              text: "Your message has been successfully sent.",
              icon: "success",
              button: "Back",
          });
          this.setState({ name: "", contact: "", email: "",message:"" });
          this.messege();
      }, (error) => {
          console.log(error.text);
          swal({
              title: "Failed to send",
              text: "Unfortunately, there was an issue sending your message. Please try again later.",
              icon: "error",
              button: "Back",
          });
      });
};


  render() {
    return (
      <div className="contact-container" id="Contact">
        <span id="contact-head">Contact Me</span>

        <div className="contact-box">
          <div className="connect-info">
            <h3>Let's Connect</h3>
            <p>
              Got any suitable jobs where I can contribute? <br />
              You can find me here !
            </p>
            <div className="flex">
              <AiOutlineMail className="icons" />
              <span>rahul.shrestha1499@gmail.com</span>
            </div>
            <br />
            <div className="flex">
              <MdPhoneInTalk className="icons" />
              <span>+1 (437) 733-9947</span>
            </div>
            <br />
            <div className="flex">
              <MdLocationPin className="icons" />
              <span>Hamilton,Ontario.</span>
            </div>
          </div>
          <div className="query-send-box">
            <h3>Send me a message</h3>
            <form onSubmit={this.handleForm}>
              First {"&"} Last Name: <span>*</span>
              <br />
              <input
                type="text"
                autoComplete="off"
                value={this.state.name}
                name="from_name"
                onChange={this.inputChange}
                id="name"
              />
              <br />
              Phone Number: <span>*</span>
              <br />
              <input
                type="tel"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                autoComplete="off"
                value={this.state.contact}
                onChange={this.inputChange}
                id="contact"
              />
              <br />
              Email Address: <span>*</span>
              <br />
              <input
                type="email"
                value={this.state.email}
                name="reply_to"
                onChange={this.inputChange}
                id="email"
              />
              <br />
              Message:
              <br />
              <textarea rows="4" id="message" value={this.state.message} onChange={this.inputChange} name="message" />
              <br />
              <button>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
