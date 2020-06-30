import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Alert } from './components/Alert'
import { Home } from './pages/Home'
import { Info } from './pages/Info'
import { Profile } from './pages/Profile'
import { AlertState } from './context/Alert/AlertState'
import { GithubState } from './context/GitHub/githubState'

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: 'Test alert' }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/info" component={Info} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
