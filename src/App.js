import React, { createContext, Component } from 'react'
import ReactDOM from 'react-dom'
import { Transition, config } from 'react-spring'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import styled from 'styled-components'
import Searchbar from './components/Searchbar'
import Name from './routes/name'
import Address from './routes/address'
import { GlobalProvider } from './GlobalState'

const App = () => (
  <GlobalProvider>
    <Router>
      <Route
        render={({ location }) => (
          <div className="fill">
            <Route
              exact
              path="/"
              render={() => <Redirect to="/hsl/10/90/50" />}
            />
            <Searchbar />
            <ul className="nav">
              <NavLink to="/hsl/10/90/50">Red</NavLink>
              <NavLink to="/hsl/120/100/40">Green</NavLink>
            </ul>
            <div className="content">
              <Transition
                config={config.slow}
                keys={location.pathname}
                from={{ opacity: 0, transform: 'scale3d(0.5,0.5,0.5)' }}
                enter={{ opacity: 1, transform: 'scale3d(1,1,1)' }}
                leave={{ opacity: 0, transform: 'scale3d(0.5,0.5,0.5)' }}
              >
                {style => (
                  <Switch location={location}>
                    <Route
                      exact
                      path="/hsl/:h/:s/:l"
                      render={props => Name({ ...props, style })}
                    />
                    <Route
                      exact
                      path="/rgb/:r/:g/:b"
                      render={props => Address({ ...props, style })}
                    />
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                )}
              </Transition>
            </div>
          </div>
        )}
      />
    </Router>
  </GlobalProvider>
)

const NavLink = props => (
  <li className="navItem">
    <Link {...props} style={{ cursor: 'pointer', color: 'inherit' }} />
  </li>
)

export default App
