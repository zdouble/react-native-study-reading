import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    Dimensions,
    Animated,
    Easing
} from 'react-native'

const {
    width: maxWidth,
    height: maxHeight
} = Dimensions.get('window')

class SplashScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scaleValue: new Animated.Value(1)
        }
    }

    componentDidMount() {
        Animated.timing(this.state.scaleValue, {
            toValue: 1.2,
            duration: 1000,
            easing: Easing.linear
        }).start()
    }

    render() {
        return (
            <Animated.Image
                style={[styles.splashScreen, { transform: [{ scale: this.state.scaleValue }] }]}
                source={require('../../assets/images/splash-screen.png')}
            />
        )
    }
}

const styles = StyleSheet.create({
    splashScreen: {
        width: maxWidth,
        height: maxHeight
    }
})

export default SplashScreen