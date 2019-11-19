import React from 'react';
import styles from './CounterSetting.module.css';
import MaxStartValue from "./MaxStartsValues/MaxStartValue";
import ButtonSet from "./ButtonsSet/ButtonSet";

class CountersSetting extends React.Component {

    render = (props) => {
        return (
            <div className={styles.blockCounter}>
                <MaxStartValue  maxCount={this.props.maxCount} startCount={this.props.startCount}
                               setNewMaxValue={this.props.setNewMaxValue}
                               setNewStartValue={this.props.setNewStartValue}/>
                <ButtonSet isDisabledSet={this.props.isDisabledSet} count={this.props.count}
                           maxCount={this.props.maxCount} startCount={this.props.startCount}
                           setButtonSet={this.props.setButtonSet}/>
            </div>
        );
    }
};

export default CountersSetting;