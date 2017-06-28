import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { getArticleList } from '../../api'
import ArticleList from './article-list.js'

class Main extends Component {
    componentWillMount() {
        getArticleList({ typeId: 19, page: 20 })
            .then(res => console.log(res))
    }
    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar />}
                tabBarUnderlineStyle={{ backgroundColor: 'red' }}
                tabBarBackgroundColor="red"
            >
                <ArticleList tabLabel="test" />
                <ArticleList tabLabel="test2" />
                <ArticleList tabLabel="test3" />

            </ScrollableTabView>
        )
    }
}

export default Main
