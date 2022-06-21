import React from "react";
import styles from "./btnDesktop.module.scss";

interface Props {
    readonly selected_planet: string;
    readonly onChosen: () => void;
    readonly position: string;
    readonly title: string;
}

export const BtnDesktop: React.FunctionComponent<Props> = props => {
    const { selected_planet, onChosen, position, title } = props;
    return (
        <div
            className={`${styles.btn_wrap} ${styles[selected_planet]}`}
            onClick={() => onChosen()}
        >
            <span>{position}</span>
            <p>{title}</p>
        </div>
    );
};
