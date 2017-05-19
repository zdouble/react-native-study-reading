import React from 'react'
import { render } from 'react-dom'
import routes from './routers'
import store, { history } from './store'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
)
