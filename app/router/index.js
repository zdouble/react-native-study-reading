import { StackNavigator, TabNavigator } from 'react-navigation'
import MainContainers from '../containers/main-containers.js'
import CategoryContainers from '../containers/category-containers.js'
import SplashScreen from '../views/splash-screen'
import Feedback from '../views/feedback'
import About from '../views/about'
import WebViewPage from '../views/web-view-page'

const tabContainer = TabNavigator(
    {
        Main: { screen: MainContainers },
        Category: { screen: CategoryContainers },
        Feedback: { screen: Feedback },
        About: { screen: About }
    },
    {
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            indicatorStyle: {
                height: 0
            },
            activeTintColor: '#3e9ce9',
            inactiveTintColor: '#999',
            style: {
                backgroundColor: '#fff'
            }
        }
    }
)

const router = StackNavigator(
    {
        Home: {
            screen: tabContainer,
            navigationOptions: {
                headerLeft: null
            }
        },
        SplashScreen: {
            screen: SplashScreen,
            navigationOptions: {
                header: null
            }
        },
        Category: {
            screen: CategoryContainers
        },
        WebViewPage: {
            screen: WebViewPage
        }
    },
    {
        initialRouteName: 'SplashScreen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#3e9ce9'
            },
            headerTitleStyle: {
                color: '#fff'
            },
            headerTintColor: '#fff'
        }
    }
)

export default router
