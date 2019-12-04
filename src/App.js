import React from 'react';
import './App.css';
import Buttons from './Battons/Buttons';
import Counter from "./counter/Counter";
import CounterSetting from "./CountersSetting/CounterSetting";


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.restoreState()
    }

    restoreState = () => {
        let state = {};
        let stateAtString = localStorage.getItem('our-state');
        if (stateAtString != null) {
            state = JSON.parse(stateAtString);
        }
        this.setState(state);
    };

    saveState = () => {
      let stateAtString = JSON.stringify(this.state);
      localStorage.setItem('our-state', stateAtString);
    };

    state = {
        maxCount: 5,
        startCount: 0,
        count: 0,
        isDataSet: false,
        isErrorSet: false,
        isDisabledSet: false,
        isDisabledInc: true,
        isDisabledReset: true
    };

    addClick = () => {
        if (this.state.count < this.state.maxCount)
            this.setState({
                count: this.state.count + 1
            });
    };

    addClickReset = () => {
        this.setState({
            count: this.state.startCount
        });
    };

    setNewMaxValue = (newMaxValue) => {
        const isErrorSet = newMaxValue === this.state.startCount;
        if (newMaxValue <= 20)
            if (newMaxValue >= -20)
                this.setState({
                    maxCount: newMaxValue,
                    isErrorSet,
                    isDisabledSet: false,
                    isDataSet: false
                })
    };

    setNewStartValue = (newStartValue) => {
        const isErrorSet = newStartValue === this.state.maxCount;
        if (this.state.maxCount >= newStartValue)
            if (newStartValue <= 20)
                if (newStartValue >= -20)
                    this.setState({
                        startCount: newStartValue,
                        isErrorSet,
                        isDisabledSet: false,
                        isDataSet: false
                    })
    };

    setButtonSet = () => {
        this.setState({
            count: this.state.startCount,
            isDataSet: true,
            isDisabledSet: true,
        }, () => {this.saveState()})
    };

    render = (props) => {
        return (
            <div className='block'>
                <div className='counterSetting'>
                    <CounterSetting />
                </div>

                <div className='counter'>
                    <Counter
                        // isErrorSet={this.state.isErrorSet} count={this.state.count} maxCount={this.state.maxCount}
                        //      startCount={this.state.startCount} isDataSet={this.state.isDataSet}
                    />
                    <Buttons
                        // isDisabledReset={this.state.isDisabledReset}
                        //      isDisabledInc={this.state.isDisabledInc} isDisabledSet={this.state.isDisabledSet}
                        //      setNewMaxValue={this.setNewMaxValue} addClick={this.addClick}
                        //      addClickReset={this.addClickReset} state={this.state}
                    />
                </div>
            </div>
        );
    }
};

export default App;
