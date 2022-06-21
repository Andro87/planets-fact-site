import React, { useState } from "react";

import styles from "./planet.module.scss";
import { PlanetInfo, BtnDesktop, BtnMobile } from "components";
import Planet from "../../model/Planet";

import useEmblaCarousel from "embla-carousel-react";

interface Props {
    readonly planet: Planet;
}

export const Planet: React.FunctionComponent<Props> = props => {
    const { planet } = props;
    const buttonMobile = ["overview", "stucture", "surface"];
    const buttonDesktop = [
        {
            position: "01",
            title: " overview"
        },
        { position: "02", title: " internal stucture" },
        {
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
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.embla__container}>
                    <div className={styles.embla_slide}>
                        <PlanetInfo
                            planet={planet}
                            planetName={planet.name}
                            info="overview"
                            image="planet"
                            buttonDesktop={buttonDesktop.map(
                                (button, index) => (
                                    <BtnDesktop
                                        key={index}
                                        onChosen={() => {
                                            emblaApi.scrollTo(index);
                                            setSelected(index);
                                        }}
                                        selected_planet={
                                            selected === index
                                                ? planet.name
                                                : null
                                        }
                                        position={button.position}
                                        title={button.title}
                                    />
                                )
                            )}
                        />
                    </div>

                    <div className={styles.embla_slide}>
                        <PlanetInfo
                            planet={planet}
                            planetName={planet.name}
                            info="structure"
                            image="internal"
                            buttonDesktop={buttonDesktop.map(
                                (button, index) => (
                                    <BtnDesktop
                                        key={index}
                                        onChosen={() => {
                                            emblaApi.scrollTo(index);
                                            setSelected(index);
                                        }}
                                        selected_planet={
                                            selected === index
                                                ? planet.name
                                                : null
                                        }
                                        position={button.position}
                                        title={button.title}
                                    />
                                )
                            )}
                        />
                    </div>

                    <div className={styles.embla_slide}>
                        <PlanetInfo
                            planet={planet}
                            planetName={planet.name}
                            info="geology"
                            image="planet"
                            imageGeology="geology"
                            buttonDesktop={buttonDesktop.map(
                                (button, index) => (
                                    <BtnDesktop
                                        key={index}
                                        onChosen={() => {
                                            emblaApi.scrollTo(index);
                                            setSelected(index);
                                        }}
                                        selected_planet={
                                            selected === index
                                                ? planet.name
                                                : null
                                        }
                                        position={button.position}
                                        title={button.title}
                                    />
                                )
                            )}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};
