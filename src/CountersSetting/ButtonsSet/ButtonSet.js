import React from 'react';
import styles from './ButtonSet.module.css';

class ButtonSet extends React.Component {

    buttonSet = (disabledOnClickSet) => {
        this.props.setButtonSet(disabledOnClickSet)
    };

    render = (props) => {
        const { isDisabledSet, startCount, maxCount } = this.props;
        const disabledStartMax = startCount === maxCount;
        return (
            <div className={styles.buttons}>
                <button className={styles.button} disabled={disabledStartMax || isDisabledSet }
                        onClick={this.buttonSet}>set
                </button>
            </div>
        );
    }
};

export default ButtonSet;