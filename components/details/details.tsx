import React from "react";
import styles from "./details.module.scss";

interface Props {
    readonly info: string;
    readonly detail: string;
}
export const Details: React.FunctionComponent<Props> = props => {
    const { info, detail } = props;
    return (
        <div className={styles.details_container}>
            <h2>{info}</h2>
            <h3>{detail}</h3>
        </div>
    );
};
