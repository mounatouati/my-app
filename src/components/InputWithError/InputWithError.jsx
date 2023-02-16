import React from 'react'

export default function InputWithError(props) {
    return (
        <div>
            <input style={{ borderColor: props.errorMessage !== "" ? "red" : "green" }}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value} />
            <p style ={{color:"red"}}> {props.errorMessage}</p>
        </div>
    )
}
