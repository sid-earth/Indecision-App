import React from 'react';

// Simple Functional Component - OPTION
const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.value}</p>
            <button
                className="button button--link"
                onClick={props.handleDeleteOption}
            >
                remove
            </button>

        </div>
    );
}

export default Option;
