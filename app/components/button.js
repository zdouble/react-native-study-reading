import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const Button = ({ name, select, selected }) => (
    <TouchableOpacity
        style={[styles.container, selected ? styles.selected : null]}
        onPress={select}
        activeOpacity={1}
    >
        <Text style={{ color: selected ? '#fff' : '#3e9ce9' }}>{name}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 25,
        margin: 10,
        alignItems: 'center',
        borderRadius: 15
    },
    selected: {
        backgroundColor: '#3e9ce9'
    }
})

export default Button
