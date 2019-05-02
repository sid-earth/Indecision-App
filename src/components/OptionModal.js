import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (

    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.buttonClickAction}
        contentLabel="Selected Option"     // Accessibility Options
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected option:</h3>
        {props.selectedOption && <p className="modal__text">{props.selectedOption}</p>}
        <button className="button" onClick={props.buttonClickAction}>Okay!</button>
    </Modal>

);

export default OptionModal;