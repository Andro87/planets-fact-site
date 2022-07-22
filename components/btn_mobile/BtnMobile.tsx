import React from "react";
import styles from "./BtnMobile.module.scss";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

interface Props {
    readonly path: string;
    readonly title: string;
    readonly selected_btn: string;
}
export const BtnMobile: React.FunctionComponent<Props> = props => {
    const { path, title, selected_btn } = props;
    const router = useRouter();
    return (
        <Link href={path}>
            <a
                className={`${styles.btn} ${
                    router.asPath === path ? styles[selected_btn] : null
                }`}
            >
                {title}
            </a>
        </Link>
    );
};
