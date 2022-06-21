import React, { ReactNode } from "react";
import styles from "./planetInfo.module.scss";
import Source from "../svgs/icon-source.svg";
import Planet from "../model/Planet";

interface Props {
    readonly planet: Planet;
    readonly planetName: string;
    readonly image: string;
    readonly imageGeology?: string;
    readonly info: string;
    readonly buttonDesktop?: ReactNode;
}

const PlanetInfo: React.FunctionComponent<Props> = props => {
    const { planet, planetName, image, imageGeology, info, buttonDesktop } =
        props;

    return (
        <div className={styles.planet_info_container}>
            <div
                className={`${styles.planet_img_container} ${styles[planetName]}`}
            >
                <img
                    src={planet.images[image]}
                    alt=""
                    className={styles.planet_img}
                />
                <img
                    src={planet.images[imageGeology]}
                    alt=""
                    className={styles.planet_img_inner}
                />
            </div>
            <div className={styles.planet_info_wrap}>
                <div className={styles.planet_info}>
                    <h1>{planet.name}</h1>
                    <p>{planet[info].content}</p>
                    <p>
                        Source:
                        <a href={planet[info].source}>
                            Wikipedia
                            <span>
                                <Source />
                            </span>
                        </a>
                    </p>
                </div>

                <div className={styles.btn_container_desktop}>
                    {buttonDesktop}
                </div>
            </div>
        </div>
    );
};

export default PlanetInfo;
