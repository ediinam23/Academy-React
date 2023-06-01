import React from "react";
import ContactInformation from "./contactInformation/ContactInformation.jsx";

const Footer = () => {
    return(
        <footer style={{backgroundColor: "#283E51"}}>
            <div>
                <p>Interested in our services?</p>
                <p>contact us</p>
            </div>
            <ContactInformation/>
            <div>
                <p>Follow us on social media</p>
                <div>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                </div>
            </div>
            <div>
                <span>© All rights reserved 2019 Amplitudo Ltd.</span>
            </div>
        </footer>
    )
}

export default Footer;