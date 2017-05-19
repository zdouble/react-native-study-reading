import React from 'react'
import routes from './routers'
import store from './store'
import { Provider } from 'react-redux'


<Provider store={store}>
    <Router history={history} routes={routes} />
</Provider>
   
