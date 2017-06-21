import React, { Component } from 'react'
import Category from '../views/category'
import { getTypeList } from '../api'

class CategoryContainers extends Component {
    componentWillMount() {
        getTypeList()
    }
    render() {
        return (
            <Category />
        )
    }
}

export default CategoryContainers
