import React from "react";
import styles from "./btnDesktop.module.scss";

import Link from "next/link";

interface Props {
    readonly selected_planet: string;
    readonly path: string;
    readonly position: string;
    readonly title: string;
}
export const BtnDesktop: React.FunctionComponent<Props> = props => {
    const { path, selected_planet, position, title } = props;
    return (
        <Link href={path}>
            <a className={`${styles.btn_wrap} ${styles[selected_planet]}`}>
                <span>{position}</span>
                {title}
            </a>
        </Link>
    );
};
