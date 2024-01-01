
import "./Contact.css"
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';






const Contact = () => {

    let [BoxVis, setBoxVis] = useState("HideBox");

    function Hide(){
        setBoxVis("HideBox");
    }

    function OnlyOpen(){
        setBoxVis("SuccessBox");
    }


    const form = useRef();


    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs
        .sendForm(
            "service_9y3koq7",
            "template_k7uh9np",
            form.current,
            "W59nLwNdrbBpt3yJl"
        )
        .then((result) =>{

        },
        (error) =>{
            setBoxVis("BoxChanged");
        }
        );
    };



    return ( 
        <div className="ContactDiv">
            <form ref={form} onSubmit={sendEmail}>
                <h1>Hire Me!</h1>
                <h5>zwierzchowski.mateo@gmail.com</h5>

                <h3>Your Name</h3>
                <input type="text" name="user_name"/>
                <h3>Your Email</h3>
                <input type="email" name="user_email"/>
                <h3>Message</h3>
                <textarea id="textArea"  name="message"></textarea>
                <button type="submit" value="Send" onClick={OnlyOpen}>Send</button>
            </form>



            <div className={BoxVis}>
                <button className="Close" onClick={Hide}>X</button>
                <h4>Your message has been sent successfully!</h4>
            </div>
        </div>
     );
}
 
export default Contact;
