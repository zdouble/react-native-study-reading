import React, { Component, PropTypes } from 'react'
import { WebView, StyleSheet, BackHandler } from 'react-native'
import Loading from '../../components/loading'
import { bindBackExitApp, removeBackExitApp } from '../../utils/back-exit-app.js'

let handler

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

    _onNavigationStateChange = (e) => {
        if (e.canGoBack) {
            if (!handler) {
                handler = BackHandler.addEventListener('hardwareBackPress', () => {
                    this.webView.goBack()
                    return true
                })
            }
        } else {
            handler && handler.remove()
        }
    }

    render() {
        return <WebView
            ref={ ref => (this.webView = ref) }
            style={styles.container}
            source={{ uri: this.props.navigation.state.params.url }}
            startInLoadingState
            onNavigationStateChange={this._onNavigationStateChange}
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
