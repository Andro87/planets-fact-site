import React, { useState } from "react";
import styles from "./header.module.scss";
import Menu from "../svgs/icon-hamburger.svg";
import PlanetPage from "./planetPage";
const Header: React.FunctionComponent = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className={styles.header}>
            <p className={styles.logo}>THE PLANETS</p>

            <button
                type="button"
                title="menu"
                className={`${styles.menu_btn} ${
                    open ? styles.menu_btn_open : null
                }`}
                onClick={() => setOpen(!open)}
            >
                <Menu />
            </button>
            <nav
                className={`${styles.navigation} ${
                    open ? styles.navigation_mobile : null
                }`}
            >
                <PlanetPage path="/" name="Mercury" planet="mercury" />
                <hr />
                <PlanetPage path="/venus" name="Venus" planet="venus" />
                <hr />
                <PlanetPage path="/earth" name="Earth" planet="earth" />
                <hr />
                <PlanetPage path="/mars" name="Mars" planet="mars" />
                <hr />
                <PlanetPage path="/jupiter" name="Jupiter" planet="jupiter" />
                <hr />
                <PlanetPage path="/saturn" name="Saturn" planet="saturn" />
                <hr />
                <PlanetPage path="/uranus" name="Uranus" planet="uranus" />
                <hr />
                <PlanetPage path="/neptune" name="Neptune" planet="neptune" />
            </nav>
        </header>
    );
};

export default Header;
