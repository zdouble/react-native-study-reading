import React from 'react'
import routes from './routers'
import store from './store'
import { Provider } from 'react-redux'
import App from './containers/app.js'


const Root = () => {
    <Provider store={store}>
        <App />
    </Provider>
}

export default Root;

   
