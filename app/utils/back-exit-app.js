import {
    BackHandler,
    ToastAndroid
} from 'react-native'

let count = 2

let handler = null

const bindBackExitApp = () => {
    handler = BackHandler.addEventListener('hardwareBackPress', () => {
        count--
        if (count === 1) {
            ToastAndroid.show('再按一次退出ireading', ToastAndroid.SHORT)
            return true
        } else if (count === 0) {
            count = 2
            BackHandler.exitApp()
            return false
        }
    })
}

const removeBackExitApp = () => {
    handler.remove()
}

export {
    bindBackExitApp,
    removeBackExitApp
}
