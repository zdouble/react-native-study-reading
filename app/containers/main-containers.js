import React, { Component } from 'react'
import { connect } from 'react-redux'
import Main from '../views/main'

class MainContainers extends Component {
    render() {
        return (
            <Main {...this.props} />
        )
    }
}
export default connect(
    ({ user }) => ({ user })
)(MainContainers)
