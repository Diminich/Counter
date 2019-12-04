import React from 'react';
import style from './Counter.module.css';
import {connect} from "react-redux";

class Counter extends React.Component {

    render = () => {
        const {isErrorSet, isDataSet , count , maxCount, startCount} = this.props;
        let classForInc = count === maxCount ? style.filterActive : '';
        let error = maxCount === startCount ? style.errorActive : '';
        const statusText = isErrorSet ? 'error' : isDataSet ? count : "set value";
        return (
            <div className={`${classForInc} ${style.counters} ${error}`}>
                {
                    statusText
                }
            </div>
        );
    }
};

const mapStateToProps = (state) => {
      return {
          count: state.counterSettingPage.count,
          startCount: state.counterSettingPage.startCount,
          maxCount: state.counterSettingPage.maxCount,
          isDisabledSet: state.counterSettingPage.isDisabledSet,
          isDataSet: state.counterSettingPage.isDataSet
      };
};

export default connect(mapStateToProps, null)(Counter);
