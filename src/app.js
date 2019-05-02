import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

import 'normalize.css/normalize.css';   // Reset Browser Styling
import './styles/styles.scss';          // Load App Style

ReactDOM.render(
    <IndecisionApp />,
    document.getElementById('app')
);