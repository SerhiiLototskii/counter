import React from 'react';
import {connect} from "react-redux";
import {ResetAC, UpdateCounterAC} from "./store/counterReducer";
import {Counter} from "./Counter";


let mapSateToProps = (state:any) => {
    return {
        counter:state.counterPage.counter,
        disableIncrementValue: state.counterPage.disableIncrementValue,
        disableResetValue: state.counterPage.disableResetValue
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