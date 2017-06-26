import React, { PropTypes } from 'react'
import {
    Text,
    TouchableOpacity,
    ViewPropTypes
} from 'react-native'

const Button = ({
    text,
    onPress,
    selected,
    activeOpacity,
    containerStyle,
    textStyle
}) => (
    <TouchableOpacity
        style={containerStyle}
        onPress={onPress}
        activeOpacity={activeOpacity}
    >
        <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
)

Button.propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    textStyle: Text.propTypes.style,
    containerStyle: ViewPropTypes.style,
    text: PropTypes.string,
    activeOpacity: PropTypes.number
}

Button.defaultProps = {
    onPress() {},
    disabled: false,
    activeOpacity: 0.8
}

export default Button
