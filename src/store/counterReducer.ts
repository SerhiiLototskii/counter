let UPDATE_COUNTER = 'UPDATE_COUNTER'
let RESET = 'RESET'

let initialState = {
    counter: 0,
    disableIncrementValue: false,
    disableResetValue: true,
}


const counterReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case UPDATE_COUNTER: {
            if (state.counter === 4) {
                state.disableIncrementValue = true
            }
            return {...state,
                counter: state.counter +1,
                disableResetValue: false
            }
        }
        case RESET: {
            return {
                ...state,
                counter: 0,
                disableResetValue: true,
                disableIncrementValue: false
            }

        }
        default :
            return state

    }
}

export const UpdateCounterAC = () => ({type: UPDATE_COUNTER})

export const ResetAC = () => ({type: RESET})

export default counterReducer