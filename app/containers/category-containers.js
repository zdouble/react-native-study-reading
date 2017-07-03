import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import Category from '../views/category'

class CategoryContainers extends Component {
    static navigationOptions = {
        title: '分类',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="md-pricetags" size={25} color={tintColor} />
        )
    }

    render() {
        return (
            <Category isFirst={this.props.user.isFirst} />
        )
    }
}

export default connect(
    ({ user }) => ({ user })
)(CategoryContainers)
