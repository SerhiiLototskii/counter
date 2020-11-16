import React from 'react';
import {connect} from "react-redux";
import {Counter} from "./Counter";
import {ResetAC, UpdateCounterAC} from "./store/counterReducer";

let mapSateToProps = (state:any) => {
    return {
        counter:state.counter,
        disableIncrementValue: state.disableIncrementValue,
        disableResetValue: state.disableResetValue
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        updateCounter: () => {
            dispatch(UpdateCounterAC())
        },
        reset: () => {
            dispatch(ResetAC())
        },

    }
}

const CounterContainer = connect (mapSateToProps,mapDispatchToProps) (Counter)

export default CounterContainer;