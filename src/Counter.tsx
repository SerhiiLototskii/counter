import React from 'react';
import {Button} from "./Button";


export function Counter(props: any) {
    debugger
    return (
        <div>
            <div className={props.disableIncrement ? "incStop" : ""}>{props.counter}</div>
            <Button
                title={'inc'}
                action={props.updateCounter}
                value={props.disableIncrementValue}
            />
            <Button
                title={'reset'}
                action={props.reset}
                value={props.disableResetValue}
            />
        </div>


    )

}