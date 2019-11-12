import React from 'react';
import style from './Buttons.module.css'

class Buttons extends React.Component {

    render = (props) => {
        let disabled = this.props.state.count === 5;
        return (
            <div className={style.buttons}>
                <button className={style.button} onClick = {this.props.addClick} disabled={disabled}>inc</button>
                <button className={style.button} onClick = {this.props.addClickReset} >recet</button>
            </div>
        );
    }
}

export default Buttons;