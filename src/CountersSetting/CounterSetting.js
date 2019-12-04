import React from 'react';
import styles from './CounterSetting.module.css';
import MaxStartValue from "./MaxStartsValues/MaxStartValue";
import ButtonSet from "./ButtonsSet/ButtonSet";

class CountersSetting extends React.Component {

    render = (props) => {
        return (
            <div className={styles.blockCounter}>
                <MaxStartValue />
                <ButtonSet />
            </div>
        );
    }
};

export default CountersSetting;