import React from 'react'
import {Text, View } from 'react-native'

const RowText = (props) => {
    const {
        msgOne,
        msgTwo,
        containerStyles,
        msgOneStyles,
        msgTwoStyles 
    } = props
    return (
        <View style = {containerStyles}>
        <Text style = {msgOneStyles}>{msgOne} </Text>
        <Text style = {msgTwoStyles}>{msgTwo}</Text>
        </View>
    )
}


export default RowText 