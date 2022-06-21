import React from "react";
import Link from "next/link";
import styles from "./planetPage.module.scss";
import { useRouter } from "next/dist/client/router";
interface Props {
    readonly path: string;
    readonly name: string;
    readonly planet: string;
}

export const PlanetPage: React.FunctionComponent<Props> = props => {
    const { path, name, planet } = props;
    const router = useRouter();

    return (
        <Link href={path}>
            <a
                className={`${styles.link}  ${styles[planet]} ${
                    router.asPath === path ? styles.planet_desktop_link : null
                }`}
            >
                {name}
            </a>
        </Link>
    );
};
