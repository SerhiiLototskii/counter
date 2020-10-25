import React from 'react';


export function Button1(props: any) {


    return (
        <div>
            <button className="button"
                    onClick={props.increment}
                    disabled={props.disableIncrement}> inc
            </button>
        </div>

    )
}