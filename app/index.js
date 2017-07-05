import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Router from './router'
import { bindBackExitApp } from './utils/back-exit-app.js'
class App extends Component {
    componentDidMount() {
        bindBackExitApp()
    }
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}

export default App
