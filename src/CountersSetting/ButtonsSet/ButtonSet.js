import React from 'react';
import styles from './ButtonSet.module.css';
import {connect} from "react-redux";
import {setDisabledSetAC} from "../../Redux/CounterSetting-Reducer";

class buttonSet extends React.Component {

    buttonSet = () => {
        this.props.setButtonSet()
    };

    render = (props) => {
        const { isDisabledSet, startCount, maxCount } = this.props;
        const disabledStartMax = startCount === maxCount;
        return (
            <div className={styles.buttons}>
                <button className={styles.button} disabled={disabledStartMax || isDisabledSet }
                        onClick={this.buttonSet} >set
                </button>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
  return {
      startCount: state.counterSettingPage.startCount,
      MaxCount: state.counterSettingPage.MaxCount,
      isDisabledSet: state.counterSettingPage.isDisabledSet

  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setButtonSet: () => {
            dispatch(setDisabledSetAC())
        }
    }
};

const ButtonSet = connect(mapStateToProps, mapDispatchToProps)(buttonSet);
export default ButtonSet;