import React from 'react';
import style from './Counter.module.css';

class Counter extends React.Component {

    render = (props) => {
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

export default Counter;
