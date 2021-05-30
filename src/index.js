import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById("root");

function renderToApp(root) {
  root && ReactDOM.render(
    <App />,
    root
  );
}

renderToApp(rootElement);

export { renderToApp };