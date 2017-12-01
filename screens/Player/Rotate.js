import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'

class Rotate extends Component {

    state = {
        degree: new Animated.Value(0),
    }

    rotate = () => {
        this.state.degree.setValue(0)
        Animated.timing(this.state.degree, {
            toValue: 360,
            duration: 10000,
            easing: Easing.linear
        }).start(() =>
            this.rotate()
        )
    }

    componentDidMount() {
        this.rotate()
    }

    render() {
        return (
            <Animated.View
                style={{
                    transform: [
                        {
                            rotate: this.state.degree.interpolate({
                                inputRange: [0, 360],
                                outputRange: ['0deg', '360deg'],
                            }),
                        },
                    ],
                }}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}

export default Rotate
