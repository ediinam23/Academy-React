import React from "react";
import classes from "./TopicCard.module.scss";

const TopicCard = ({
                       title = "",
                       description = "",
                       image = "",
                        imageAltText = ""
}) => {
    return <div className={classes['container']}>
        <div>
            <h4 className={classes['title']}>{title}</h4>
            <p className={classes['description']}>{description}</p>
        </div>
        <div>
            <img className={classes['image']} src={image} alt={imageAltText}/>
        </div>
    </div>
}

export default TopicCard;