
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

const LoginDone = (userName) => {
    return {
        type: LOG_IN,
        userName
    }
}

const Login = (userName) => {
    return dispatch => {
        dispatch(LoginDone(userName))
    }
}

const Logout = () => {
    return dispatch => {
        dispatch({type:LOG_OUT})
    }
}

const checkLogin = () => {
    return dispatch => {
        if(userName){
            dispatch(LoginDone(userName))
        }
    }

}

export default {
    checkLogin,
    Login,
    Logout
}
