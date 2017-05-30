import { StackNavigator } from 'react-navigation'
import Main from '../containers/main-containers.js'

const App = StackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    }
})

export default App
