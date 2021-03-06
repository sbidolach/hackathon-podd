import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { compose } from 'recompose'
import thunk from 'redux-thunk'

import reducer from './reducers'
import { getAllProjects, getAllSuppliers } from './actions'

// components
import Home from './components/Home'
import Chat from './components/Chat'
import About from './components/About'
import Contact from './components/Contact'
import Help from './components/Help'
import Project from './components/Project'
import Marketplace from './components/Marketplace'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

store.dispatch(getAllProjects())
store.dispatch(getAllSuppliers())

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/chat" component={Chat} />
        <Route path="/help" component={Help} />
        <Route path="/contact" component={Contact} />
        <Route path="/p/:id" component={Project} />
        <Route path="/marketplace" component={Marketplace} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>)


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
