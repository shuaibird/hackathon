import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { Provider } from 'react-redux'
import store from './store'

import { Welcome, Capture, Loading, Player, Fail } from './screens'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                <Scene key='root' hideNavBar>
                    <Scene key='welcome' component={Welcome} title='welcome' />
                    <Scene key='capture' component={Capture} title='capture' />
                    <Scene key='loading' component={Loading} title='loading' />
                    <Scene key='player' component={Player} title='player' />
                    <Scene key='fail' component={Fail} title='fail' />
                </Scene>
                </Router>
            </Provider>
        )
    }
}
