import React, {Component} from 'react';

const counterControl = (props) => (
    <button onClick={props.onButtonPush} >{props.title}</button>
)

export default counterControl

