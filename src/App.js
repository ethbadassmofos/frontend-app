import React from 'react'
import { Transition, config } from 'react-spring'
import {
  Switch,
  Route
} from 'react-router-dom'
import Searchbar from './components/Searchbar'
import Name from './routes/name'
import Address from './routes/address'
import Consumer, { GlobalProvider } from './GlobalState'
import './globalStyles'

const App = () => (
  <GlobalProvider>
    <Route
      render={({ location }) => (
        <div className="fill">
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
                  <Route exact path="/" render={() => <div>Home</div>} />
                  <Route
                    path="/name/:name"
                    render={props => Name({ ...props, style })}
                  />
                  <Route
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
  </GlobalProvider>
)

export default App
