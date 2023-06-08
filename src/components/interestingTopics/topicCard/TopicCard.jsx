import React from "react";
import Topic1Image from "../../../assets/images/Group 1045.svg";
import classes from "./TopicCard.module.scss";

const TopicCard = () => {
    return <div className={classes['container']}>
        <div>
            <h4 className={classes['title']}>Mobile apps development</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat...</p>
        </div>
        <div>
            <img src={Topic1Image} alt="Mobile apps"/>
        </div>

    </div>
}

export default TopicCard;