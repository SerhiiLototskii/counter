import React, {useState} from 'react';

import './App.css';
import {Counter} from "./Counter";

function App() {
    let [counter,setUpdateCounter ] = useState<number>(0);
    let [disableIncrement,setDisableIncrement] = useState<boolean>(false);
    let [disableReset,setDisableReset] = useState<boolean>(true);




    function increment () {
        if (counter === 4) {
            setDisableIncrement(true)
        }
    setUpdateCounter(counter + 1)
        setDisableReset(false)
    }

    function reset () {
        setUpdateCounter( 0 )
        setDisableReset(true)
        setDisableIncrement(false)

    }
    return (
        <div className="App">
            <Counter counter={counter}
                     increment={increment}
                     reset={reset}
                     disableReset={disableReset}
                     disableIncrement={disableIncrement}/>
        </div>
    );
}

export default App;
