import { StackNavigator } from 'react-navigation'
import Main from '../containers/main-containers.js'
import SplashScreen from '../views/splash-screen'

const router = StackNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions: {
                header: null
            }
        },
        SplashScreen: {
            screen: SplashScreen,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: 'SplashScreen'
    }
)

export default router
