import React from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter a valid text to add item';

        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already added';

        } else {
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    };

    handleDeleteOption = (optionToRemove) => {

        this.setState((prevState) =>
            ({
                options: prevState.options.filter((item) => item !== optionToRemove)
            })
        );
    };

    handlePick = () => {
        const randomOption = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => {
            return {
                selectedOption: this.state.options[randomOption]
            };
        });
        //alert(this.state.options[randomOption]);
    };

    handleDeleteOptions = () => {

        // Remove all options from the state array
        this.setState(() => ({ options: [] }));
    };

    handleOkayButtonClick = () => {

        this.setState(() => (
            {
                selectedOption: undefined
            }
        ));
    }

    componentDidMount() {
        console.log('componentDidMount()');
        try {
            const json = JSON.parse(localStorage.getItem('options'));
            if (json) {
                this.setState(() => ({ options: json }));
            }
        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProp, prevState) {
        console.log('componentDidUpdate()');
        if (this.state.options.length !== prevState.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    // componentWillUnmount = () => {
    //     console.log('componentWillUnmount()');
    // };

    render() {
        // Header props 'title' is default
        const subtitle = 'Put your life in the hands of a computer!!';

        return (
            <div>
                <Header subtitle={subtitle} />

                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />

                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>

                </div>Î
                <OptionModal
                    buttonClickAction={this.handleOkayButtonClick}
                    selectedOption={this.state.selectedOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;