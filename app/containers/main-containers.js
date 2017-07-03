import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import Main from '../views/main'

class MainContainers extends Component {
    static navigationOptions = {
        title: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" size={25} color={tintColor} />
        )
    }

    render() {
        return (
            <Main {...this.props} />
        )
    }
}
export default connect(
    ({ user }) => ({ user })
)(MainContainers)
