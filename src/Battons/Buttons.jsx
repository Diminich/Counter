import React from 'react';
import style from './Buttons.module.css'
import {connect} from "react-redux";
import {setAddClickAC, setCountResetAC} from "../Redux/CounterSetting-Reducer";


class Buttons extends React.Component {

    addClick = () => {
        this.props.setAddClick()
    };

    addClickReset = () => {
        this.props.setResetClick()
    };

    render = () => {
        const {isDisabledInc, isDisabledSet, isDisabledReset, count, maxCount } = this.props;
        const disabledIncBtn = isDisabledInc === isDisabledSet || count === maxCount;
        const disabledResetBtn = isDisabledReset === isDisabledSet;
        return (
            <div className={style.buttons}>
                <button className={style.button} onClick={this.addClick} disabled={disabledIncBtn}>inc</button>
                <button className={style.button} onClick={this.addClickReset} disabled={disabledResetBtn}>reset</button>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        count: state.counterSettingPage.count,
        maxCount: state.counterSettingPage.maxCount,
        isDisabledInc: state.counterSettingPage.isDisabledInc,
        isDisabledSet: state.counterSettingPage.isDisabledSet,
        isDisabledReset: state.counterSettingPage.isDisabledReset
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        setAddClick: () => {
            dispatch(setAddClickAC())
        },
        setResetClick: () => {
            dispatch(setCountResetAC())
        }
    }
};

export default Buttons = connect(mapStateToProps, mapDispatchToProps)(Buttons);