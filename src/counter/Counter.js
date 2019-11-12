import React from 'react';
import './App.css';
import Buttons from './Battons/Buttons';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }
    }

    addClick = () => {
        if (this.state.count < 5)
        this.setState({
            count: this.state.count + 1
        });
    };

    addClickReset = () => {
            this.setState({
                count: this.state.count = 0
            });
        };

    render = (props) => {
        let classForInc = this.state.count === 5 ? 'filter-active' : '';
        let disabled = this.state.count === 5;
        return (
            <div>

                <div className={classForInc}>{this.state.count}</div>
                <div>
                    <Buttons addClick={this.addClick} addClickReset={this.addClickReset} disabled={disabled} />
                </div>
            </div>
        );
    }
};

export default App;
