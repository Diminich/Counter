import React from 'react';
import './App.css';
import Buttons from './Battons/Buttons';
import Counter from "./counter/Counter";
import CounterSetting from "./CountersSetting/CounterSetting";


class App extends React.Component {

    render = (props) => {
        return (
            <div className='block'>
                <div className='counterSetting'>
                    <CounterSetting/>
                </div>

                <div className='counter'>
                    <Counter/>
                    <Buttons/>
                </div>
            </div>
        );
    }
};

export default App;
