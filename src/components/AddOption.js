import React from 'react';

class AddOption extends React.Component {

    state = {
        error: undefined
    };

    handleAddOption = (e) => {

        e.preventDefault();  // Prevents page reload behaviour

        // Trim any extra spaces
        let option = e.target.elements.option_input.value.trim();

        // Call the props method to further process the event
        const err = this.props.handleAddOption(option);

        // Set own state to show the error message returned
        this.setState(() => {
            return {
                error: err
            };
        });

        if(!err) {
            e.target.elements.option_input.value = '';  //reset the textbox
        }
    };


    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option_input"></input>
                    <button className="button">AddOption</button>
                </form>
            </div>
        );
    }
}

export default AddOption;