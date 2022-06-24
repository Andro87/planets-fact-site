import React from "react";
import Planet from "../../model/Planet";
import { Details } from "../index";
import styles from "./planetDetails.module.scss";

interface Props {
    readonly planet: Planet;
}

export const PlanetDetails: React.FunctionComponent<Props> = props => {
    const { planet } = props;
    return (
        <section
            className={styles.section_planet_details}
            aria-label="more informations about the  planet"
        >
            <div className={styles.section_planet_details_wrap}>
                <Details info="rotation time" detail={planet.rotation} />
                <Details info="revolution time" detail={planet.revolution} />
                <Details info="radius" detail={planet.radius} />
                <Details info="average temp." detail={planet.temperature} />
            </div>
        </section>
    );
};
