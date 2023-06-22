import React, {useState} from "react";
import Logo from "../../assets/images/Group 1.svg";
import classes from "./Navigation.module.scss";
const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navItems = [
        {
            title: "Home",
            link: "#"
        },
        {
            title: "Services",
            link: "#"
        },
        {
            title: "Startup",
            link: "#"
        },
        {
            title: "Career",
            link: "#"
        },
        {
            title: "Company",
            link: "#"
        },
        {
            title: "Blog",
            link: "#"
        },
    ]
    return <nav className={classes["nav-container"]}>
        <a className={classes["home-link"]} href={"#"}><img src={Logo} alt={"Home"}/></a>
        <ul className={`${classes["nav-items-list-container"]} ${isNavOpen ? classes["open"] : ""}`}>
            {navItems.map((item, index) => <li className={classes["nav-item"]}
                                                                            key={`nav-item-${index}`}
                                                                            onClick={() => setIsNavOpen(false)}>
                                                                            <a href={item.link}>{item.title}</a>
                                                                        </li>)}
            <li className={classes["language-item"]}>EN</li>
        </ul>
        <div className={`${classes["menu-button"]} ${isNavOpen ? classes['open'] : ""}`}
        onClick={() => setIsNavOpen(prevState => !prevState)}>
            <span></span>
            <span></span>
            <span></span>
        </div>

    </nav>
}

export default Navigation;