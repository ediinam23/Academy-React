import React from "react";
import classes from "./ContactUs.module.scss";
import SectionTitle from "../../../components/title/sectionTitle/SectionTitle.jsx";
import ParrotImage from "../../../assets/images/2-parrot-png-images-download.png";

const ContactUs = ({
                       title = "",
                       description = ""
}) => {
    return <section className={classes["container"]}>
        <SectionTitle className={classes["title"]} title={title} color="light"/>
        <p>{description}</p>
        <button>
            Contact us
        </button>
        <img className={classes["background-image"]} src={ParrotImage} alt={"Parrot"}/>
    </section>
}

export default ContactUs;