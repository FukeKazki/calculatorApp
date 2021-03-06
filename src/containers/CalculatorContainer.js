import React, { Component } from 'react';
//connectを使ってComponentでStateへのアクセスとAction関数が使えるようにする
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import NumBtn from '../components/NumBtn';
import PlusBtn from '../components/PlusBtn';
import TimesBtn from '../components/TimesBtn';
import DividedBtn from '../components/DividedBtn';
import MinusBtn from '../components/MinusBtn';
import Result from '../components/Result';

import '../App.css';

class CalculatorContainer extends Component {
    render() {
        //処理で使うState, Actionを出しておく
        const { calculator, actions } = this.props;
        return (
            <div>
                <div className="col">
                    <NumBtn n={1} onClick={() => actions.onNumClick(1)} />
                    <NumBtn n={2} onClick={() => actions.onNumClick(2)} />
                    <NumBtn n={3} onClick={() => actions.onNumClick(3)} />
                </div>
                <div className="col">
                    <NumBtn n={4} onClick={() => actions.onNumClick(4)} />
                    <NumBtn n={5} onClick={() => actions.onNumClick(5)} />
                    <NumBtn n={6} onClick={() => actions.onNumClick(6)} />
                </div>
                <div className="col">
                    <NumBtn n={7} onClick={() => actions.onNumClick(7)} />
                    <NumBtn n={8} onClick={() => actions.onNumClick(8)} />
                    <NumBtn n={9} onClick={() => actions.onNumClick(9)} />
                </div>
                <div className="col">
                    <NumBtn n={0} onClick={() => actions.onNumClick(0)} />
                    <PlusBtn onClick={actions.onPlusClick} />
                    <TimesBtn onClick={ actions.onTimesClick } />
                    <DividedBtn onClick={ actions.onDividedClick } />
                    <MinusBtn onClick={ actions.onMinusClick } />
                </div>
                 <Result result={calculator.showingResult ? calculator.resultValue : calculator.inputValue} />
            </div>
        );
    }
}

const mapState = (state,ownProps) => ({
    calculator: state.calculator,
});

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(mapState,mapDispatch)(CalculatorContainer);