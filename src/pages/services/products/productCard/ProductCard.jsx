import React from "react";
import classes from "./ProductCard.module.scss";

const ProductCard = ({
                       title = "",
                       description = "",
                       image = "",
                        imageAltText = ""
}) => {
    return <div className={classes['container']}>
        <div className={classes['background']}/>
        <div className={classes['text-content']}>
            <h4 className={classes['title']}>{title}</h4>
            <p className={classes['description']}>{description}</p>
        </div>
        <div className={classes['image-content']}>
            <img className={classes['image']} src={image} alt={imageAltText}/>
        </div>
    </div>
}

export default ProductCard;