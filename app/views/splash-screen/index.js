import React, { Component } from 'react'
import {
    StyleSheet,
    Dimensions,
    Animated
} from 'react-native'
import store from 'react-native-simple-store'
import routeReset from '../../utils/router-reset.js'
import { setTypeList } from '../../actions/category.js'
import { setUserIsFirst } from '../../actions/user.js'
import reduxStore from '../../store'

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
            duration: 1000
        }).start(async () => {
            const isFirst = await store.get('isFirst')
            const navigation = this.props.navigation
            if (isFirst == null) {
                routeReset({ navigation, routeName: 'Category', params: { isFirst: true } })
            } else {
                const category = await store.get('category')
                reduxStore.dispatch(setTypeList(category))
                reduxStore.dispatch(setUserIsFirst(false))
                routeReset({ navigation, routeName: 'Home' })
            }
        })
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
