import React from 'react';
import styles from './MaxStartValue.module.css'
import {connect} from "react-redux";
import {setMaxCountAC, setStartCountAC} from "../../Redux/CounterSetting-Reducer";


class MaxStartValue extends React.Component {

    setMaxValue = (e) => {
        let newValue = Number(e.currentTarget.value);
        this.props.setNewMaxValue(newValue)
    };

    setStartValue = (e) => {
        let newValue = Number(e.currentTarget.value);
        this.props.setNewStartValue(newValue)
    };

    render = () => {
        const {startCount, maxCount} = this.props;
        let error = (startCount === maxCount) || (startCount >= maxCount)
        let classForInc = error? styles.filterActive : '';
        return (
            <div className={styles.blockCounter}>
                <div className={styles.max}>
                    <span><h4>max value:</h4></span>
                    <input type='number' value={maxCount} onChange={this.setMaxValue}
                           className={`${styles.input} ${classForInc}`} min={0}/>
                </div>
                <div className={styles.start}>
                    <span><h4>start value:</h4></span>
                    <input type='number' value={startCount} onChange={this.setStartValue}
                           className={`${styles.input} ${classForInc}`} max={maxCount}/>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        startCount: state.counterSettingPage.startCount,
        maxCount: state.counterSettingPage.maxCount
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setNewMaxValue: (maxCount) => {
            dispatch(setMaxCountAC(maxCount))
        },
        setNewStartValue: (startCount) => {
            dispatch(setStartCountAC(startCount))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MaxStartValue);