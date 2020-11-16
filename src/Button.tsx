import React from 'react';


export function Button(props: any) {
    return (
        <div>
            <button className="button"
                    onClick={props.action}
                    disabled={props.value}>{props.title}
            </button>
        </div>

    )
}