import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import ArticleList from './article-list.js'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({show: true})
        }, 100)
    }

    render() {
        let content =
            <View style={{flex: 1}} />
        if (this.state.show) {
            content = <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar />}
                tabBarUnderlineStyle={{ backgroundColor: '#3e9ce9', height: 2 }}
                tabBarActiveTextColor="#3e9ce9"
                tabBarBackgroundColor="#fff"
                style={{ padding: 0, flex: 1 }}
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
        }
        return content
    }
}

export default Main
