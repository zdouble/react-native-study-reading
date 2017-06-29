import React, { Component } from 'react'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import ArticleList from './article-list.js'

class Main extends Component {
    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar />}
                tabBarUnderlineStyle={{ backgroundColor: '#3e9ce9', height: 2 }}
                tabBarActiveTextColor="#3e9ce9"
                tabBarBackgroundColor="#fff"
                style={{ padding: 0 }}
            >
                <ArticleList
                    tabLabel="test"
                    typeId={14}
                />
            </ScrollableTabView>
        )
    }
}

export default Main
