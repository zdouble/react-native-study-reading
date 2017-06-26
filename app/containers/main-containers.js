import React, { Component } from 'react'
import { connect } from 'react-redux'
import Main from '../views/main'

class MainContainers extends Component {
    static navigationOptions = {
        title: '首页'
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
