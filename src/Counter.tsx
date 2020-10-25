import React from 'react';
import {Button1} from "./Button1";
import {Button2} from "./Button2";


export function Counter(props: any) {
    return (
        <div>
            <div className={props.disableIncrement ? "incStop" : ""}>{props.counter}</div>
            <Button1 increment={props.increment}
                     disableIncrement={props.disableIncrement}/>

            <Button2 reset={props.reset}
                     disableReset={props.disableReset}/>
        </div>


    )

}