# Indecision React App

Allows you to add list of activities and on the click of a button the computer
suggests you which one to do first.


# Babel Setup (one time activity)

1) Install yarn.

2) Install Babel:
yarn global add babel-cli@6.24.1     (Same as: npm i -g babel-cli@6.24.1)

3) Install Babel presets:
yarn add  babel-preset-react@6.24.1 babel-preset-env@1.5.2

Babel Command-line Help:
babel --help

4) Create ES6+ source code path: src/ and target path public/scripts.

# Babel Run:

Run babel (in watch mode) to transpile source code to target:-

Run Babel for transpilation of ES6+ from src/ to public/scripts/:

babel <input.js> --out-file=<output.js> --presets=<preset1>,<preset2> --watch
E.g.

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

# Run Live-Server:

live-server public

Opens page public/index.html @ http://127.0.0.1:8080

