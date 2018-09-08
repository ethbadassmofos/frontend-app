import React, { createContext, Component } from 'react'
import ReactDOM from 'react-dom'
import { Transition, config } from 'react-spring'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import styled from 'styled-components'
import Searchbar from './components/Searchbar'
import Name from './routes/name'
import Address from './routes/address'
import Consumer, { GlobalProvider } from './GlobalState'

const App = () => (
  <GlobalProvider>
    <Router>
      <Route
        render={({ location }) => (
          <div className="fill">
            {/* <Route
              exact
              path="/"
              render={() => <Redirect to="/hsl/10/90/50" />}
            /> */}
            <Consumer>
              {({ onSearch }) => <Searchbar onSearch={onSearch} />}
            </Consumer>
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
                      path="/name/:name"
                      render={props => Name({ ...props, style })}
                    />
                    <Route
                      exact
                      path="/address/:address"
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
