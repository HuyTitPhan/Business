import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers"

const store = createStore(reducers); //Tạo store


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
    <App />
   </Provider>
);