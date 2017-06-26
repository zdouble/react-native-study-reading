import React, { Component } from 'react'
import Category from '../views/category'

class CategoryContainers extends Component {
    static navigationOptions = {
        title: '分类'
    }

    render() {
        return (
            <Category />
        )
    }
}

export default CategoryContainers
