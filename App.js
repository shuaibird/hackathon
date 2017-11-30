import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Welcome from './screens/Welcome'
import Main from './screens/Main'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="welcome" component={Welcome} title="welcome" />
          <Scene key="main" component={Main} title="main" />
        </Scene>
      </Router>
    )
  }
}
