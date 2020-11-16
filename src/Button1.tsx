import React from 'react';


export function Button1(props: any) {
    return (
        <div>
            <button className="button"
                    onClick={props.updateCounter}
                    disabled={props.disableIncrementValue}> inc
            </button>
        </div>

    )
}