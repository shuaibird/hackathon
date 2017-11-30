import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'

import { Welcome, Capture, Main } from './screens'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="welcome" component={Welcome} title="welcome" />
          <Scene key="capture" component={Capture} title="capture" />
          <Scene key="main" component={Main} title="main" />
        </Scene>
      </Router>
    )
  }
}
