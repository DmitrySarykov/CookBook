import React  from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/App.css";
import { createStore } from 'redux';
import reduser from './redux/reducers'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reduser)

store.subscribe(() => {
    store.getState();
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
document.getElementById("root"));

