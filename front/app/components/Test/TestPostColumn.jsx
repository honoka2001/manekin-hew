import React from "react";

function TestPostColumn(props) {
    return (
        <li>
            <h2>id : {props.id}</h2>
            <p>タイトル : {props.title}</p>
						<br/>
        </li>
    );
}

export default TestPostColumn;
