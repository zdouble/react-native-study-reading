import React, { Component, PropTypes } from 'react'
import { WebView, StyleSheet } from 'react-native'
import Loading from '../../components/loading'
import { bindBackExitApp, removeBackExitApp } from '../../utils/back-exit-app.js'

class WebViewPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: navigation.state.params.title
    })

    componentDidMount() {
        removeBackExitApp()
    }

    componentWillUnmount() {
        bindBackExitApp()
    }

    render() {
        return <WebView
            style={styles.container}
            source={{ uri: this.props.navigation.state.params.url }}
            startInLoadingState
            renderLoading={() => <Loading size="large" />}
        />
    }
}

WebView.PropTypes = {
    url: PropTypes.url
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default WebViewPage
