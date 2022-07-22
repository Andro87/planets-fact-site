import React from "react";
import styles from "./BtnDesktop.module.scss";

import Link from "next/link";
import { useRouter } from "next/dist/client/router";

interface Props {
    readonly selected_planet: string;
    readonly path: string;
    readonly position: string;
    readonly title: string;
}

export const BtnDesktop: React.FunctionComponent<Props> = props => {
    const { path, selected_planet, position, title } = props;
    const router = useRouter();

    return (
        <Link href={path}>
            <a
                className={`${styles.btn_wrap} ${
                    router.asPath === path ? styles[selected_planet] : null
                }`}
            >
                <span>{position}</span>
                {title}
            </a>
        </Link>
    );
};
