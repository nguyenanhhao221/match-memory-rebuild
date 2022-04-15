import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { store } from './app/store.js';
// Add import statement below
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)