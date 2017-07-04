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
                {
                    this.props.category.map(item => (
                        <ArticleList
                            key={item.id}
                            tabLabel={item.name}
                            typeId={item.id}
                            navigation={this.props.navigation}
                        />
                    ))
                }
            </ScrollableTabView>
        )
    }
}

export default Main
