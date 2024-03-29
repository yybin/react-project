import React from 'react'
import ReactDOM  from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import store from './store'

import './assets/styles/reset.css'
import 'animate.css'

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>
, document.querySelector('#root'))