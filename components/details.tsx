import React from "react";
import styles from "./details.module.scss";

interface Props {
    readonly info: string;
    readonly detail: string;
}
const Details: React.FunctionComponent<Props> = props => {
    const { info, detail } = props;
    return (
        <div className={styles.details_container}>
            <h4>{info}</h4>
            <h2>{detail}</h2>
        </div>
    );
};

export default Details;
