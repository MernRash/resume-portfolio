import React,{Component} from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneInTalk,MdLocationPin } from "react-icons/md";
import swal from "sweetalert";
import './contact.css'


class Contact extends Component{
    state={
        name:"",
        contact:"",
        email:"",
        
    }

    messege=()=>{
        swal({
            title: "Thank You! ", 
            icon: "success",
            button: "Back",
          })
        }

    inputChange=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }

    handleForm=(e)=>{
        e.preventDefault();
        this.setState({name:"",contact:"",email:""})
        this.messege();
    }

    

    render(){
        

        const btn = this.state.name.length < 1 || this.state.contact.length < 1 || this.state.email.length < 1;
       
        return(
            <div className="contact-container" id="Contact">
                <span id="contact-head">Contact Me</span>
               
                <div className="contact-box">
                    <div className="connect-info">
                        <h3>Let's Connect</h3>
                        <p>Got any suitable jobs where I can contribute? <br/>You can find me here !</p>
                        <div className="flex"><AiOutlineMail className="icons" /><span>r.shrestha72744@gmail.com</span>
                        </div>
                        <br/>
                        <div className="flex"><MdPhoneInTalk className="icons" /><span>+91 8527356648</span></div>
                        <br/>
                        <div className="flex"><MdLocationPin className="icons" /><span>Delhi, India.</span></div>
                    </div>
                    <div className="query-send-box">
                        <h3>Send me a message</h3>
                        <form>
                            First {"&"} Last Name: <span>*</span><br/>
                            <input type="text" autoComplete='off' value={this.state.name} onChange={this.inputChange}
                            id="name" />
                            <br/>
                            Phone Number: <span>*</span><br/>
                            <input type="tel" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12"  autoComplete='off' value={this.state.contact} onChange={this.inputChange}
                            id="contact"/>
                            <br/>
                            Email Address: <span>*</span><br/>
                            <input type="email"  value={this.state.email} onChange={this.inputChange}
                            id="email"  />
                            <br/>
                            Message:<br/>
                            <textarea rows="4" />
                            <br/>
                            <button onClick={this.handleForm} disabled={btn}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;