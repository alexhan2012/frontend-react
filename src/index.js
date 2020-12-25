import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import store, { history } from './store'
import Home from './pages/home/Home'
import Counter from './pages/counter/Counter'
import Todos from './pages/todos/Todos'
import NotFound from './pages/NotFound'
import './main.css'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/todos" component={Todos} />
                    <Route component={NotFound}/>
                </Switch>
            </ConnectedRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
