import React from 'react';
import style from './Buttons.module.css'

class Buttons extends React.Component {

    render = () => {
        const { isDisabledInc, isDisabledSet, isDisabledReset, state:{ count, maxCount } } = this.props;
        const disabledIncBtn = isDisabledInc !== isDisabledSet || count === maxCount;
        const disabledResetBtn = isDisabledReset !== isDisabledSet;
        return (
            <div className={style.buttons}>
                <button className={style.button} onClick={this.props.addClick} disabled={disabledIncBtn}>inc</button>
                <button className={style.button} onClick={this.props.addClickReset} disabled={disabledResetBtn}>reset</button>
            </div>
        );
    }
}

export default Buttons;