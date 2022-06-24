import React from "react";
import styles from "./btnMobile.module.scss";

interface Props {
    readonly onChosen: () => void;
    readonly title: string;
    readonly selected_btn: string;
}
export const BtnMobile: React.FunctionComponent<Props> = props => {
    const { onChosen, title, selected_btn } = props;
    return (
        <button
            type="button"
            title={title}
            className={`${styles.btn} ${styles[selected_btn]}`}
            onClick={() => onChosen()}
        >
            {title}
        </button>
    );
};
