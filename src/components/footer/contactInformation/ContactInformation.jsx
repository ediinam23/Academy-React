import React from 'react';
import mapOfTheWorld from "../../../assets/images/Group391.svg";
import amplitudoLogo from "../../../assets/images/Group392.svg";
import smile from "../../../assets/images/sccpre.cat-angel-png-418236.png";
import logo2 from "../../../assets/images/Group386.svg";
import dot from "../../../assets/images/dot.svg";

import "./ContactInformation.css";

const ContactInformation = () => {
    return <div className="__contact-information">
        <img className="__contact-information__background" src={mapOfTheWorld} alt="Map of the world"/>
        <div className="__contact-information__indicator">
            <div className="tooltip">
                <img className="logo-image" src={amplitudoLogo} alt="Amplitudo"/>
                <span>Hello from the center of the world!</span>
                <img className="smiley-image" src={smile} alt="Smile"/>
            </div>
            <div className="dot"></div>
        </div>
        <div className="__contact-information__information">
            <img className="image" src={logo2} alt="Amplitudo"/>
            <a className="link">Boulevard of St. Petar Cetinjski 56
                <br/>
                Podgorica, Montenegro</a>
            <div></div>
            <a href="mailto:info@amplitudo.me">info@amplitudo.me</a>
            <a href="tel:38220223244">+382 20 223 244</a>
        </div>
    </div>
}

export default ContactInformation;