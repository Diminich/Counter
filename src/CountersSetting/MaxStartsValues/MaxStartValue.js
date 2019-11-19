import React from 'react';
import styles from './MaxStartValue.module.css'

class maxStartValue extends React.Component {

    setMaxValue = (e) => {
        let newValue = Number(e.currentTarget.value);
        this.props.setNewMaxValue(newValue)

    };

    setStartValue = (e) => {
        let newValue = Number(e.currentTarget.value);
        this.props.setNewStartValue(newValue)
    };

    render = () => {
        const { startCount, maxCount } = this.props;
        let classForInc = startCount === maxCount ? styles.filterActive : '';
        return (
            <div className={styles.blockCounter}>
                <div className={styles.max}>
                    <span><h4>max value:</h4></span>
                    <input type='number' value={this.props.maxCount} onChange={this.setMaxValue}
                           className={`${styles.input} ${classForInc}`}/>
                </div>
                <div className={styles.start}>
                    <span><h4>start value:</h4></span>
                    <input type='number' value={this.props.startCount} onChange={this.setStartValue}
                           className={`${styles.input} ${classForInc}`}/>
                </div>
            </div>
        );
    }
};

export default maxStartValue;