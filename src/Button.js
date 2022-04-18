import React from "react";


function Button(props) {

    return(
        <button onClick={props.page}>{props.children}</button>
    )
}

export default Button;