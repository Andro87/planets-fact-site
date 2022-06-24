import React, { useState } from "react";
import styles from "./planet.module.scss";

import { PlanetInfo, BtnDesktop, BtnMobile } from "../index";
import Planet from "../../model/Planet";
import { useRouter } from "next/router";
import useEmblaCarousel from "embla-carousel-react";

interface Props {
    readonly planet: Planet;
    readonly info: string;
    readonly image: string;
    readonly imageGeology?: string;
    readonly planetName: string;
}

export const Planet: React.FunctionComponent<Props> = props => {
    const { planet, info, image, imageGeology, planetName } = props;

    const buttonMobile = ["overview", "stucture", "surface"];
    const buttonDesktop = [
        {
            path: `${planetName}/`,
            position: "01",
            title: " overview"
        },
        {
            path: `${planetName}/structure`,
            position: "02",
            title: " internal stucture"
        },
        {
            path: `${planetName}/geology`,
            position: "03",
            title: " surface geology"
        }
    ];
    const [emblaRef, emblaApi] = useEmblaCarousel({ draggable: false });
    const [selected, setSelected] = useState<number>(0);
    return (
        <main className={styles.main}>
            <div className={styles.btn_container_mobile}>
                {buttonMobile.map((button, index) => (
                    <BtnMobile
                        key={index}
                        title={button}
                        onChosen={() => {
                            emblaApi.scrollTo(index);
                            setSelected(index);
                        }}
                        selected_btn={selected === index ? planet.name : null}
                    />
                ))}
            </div>

            <div className={styles.planet_container}>
                <PlanetInfo
                    planet={planet}
                    planetName={planet.name}
                    info={info}
                    image={image}
                    imageGeology={imageGeology}
                    buttonDesktop={buttonDesktop.map((button, index) => (
                        <BtnDesktop
                            key={index}
                            path={button.path}
                            selected_planet={
                                selected === index ? planet.name : null
                            }
                            position={button.position}
                            title={button.title}
                        />
                    ))}
                />
            </div>
        </main>
    );
};
