import React from 'react'
import {SafeAreaView , StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import {weatherType} from '../utilities/weatherType'

const CurrentWeather = ({weatherData}) => {
  
        const {main : {temp, feels_like , temp_max, temp_min},
         weather
        } = weatherData
        const weatherCondition = weather[0]?.main
        
        const {
          wrapper,
          container,
          tempStyles,
          feels,
          highlowwrapper,
          highlow,
          bodywrapper,
          description,
          message
              } = styles
 
  return (
    <SafeAreaView style = {[wrapper,
    {backgroundColor : weatherType[weatherCondition]?.backgroundColor}
    ]}
    >      
    
      <View style = {container}>
      <Feather name={weatherType[weatherCondition]?.icon} 
      size={100} 
      color="white" 
      />
        <Text style = {tempStyles}>{`${temp}°`}</Text>
        <Text style = {feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText 
                 msgOne = {`High : ${temp_max}° `}
                 msgTwo = {`Low : ${temp_min}°`}
                 containerStyles = {highlowwrapper}
                 msgOneStyles = {highlow}
                 msgTwoStyles = {highlow}
        />
        </View>
        <RowText 
               msgOne = {weather[0]?.description}
               msgTwo = {weatherType[weatherCondition]?.message}
               containerStyles = {bodywrapper}
               msgOneStyles = {description}
               msgTwoStyles = {message}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper : {
    flex : 1,
  },
  container: {
    alignItems: 'center',
    flex : 1,
    justifyContent : 'center'
  },
  tempStyles: {
         color: 'black',
         fontSize : 48
  },
  feels:{
          fontSize : 40,
          color: 'black'
  },
  highlow: {
           color : 'black',
           fontSize: 20
  },
  highlowwrapper: {
    flexDirection :'row'
  },
  bodywrapper : {
    justifyContent : 'flex-end',  //this will display the text at the bottom of the screen
    alignItems: 'flex-start',
    paddingLeft : 25,
    marginBottom : 40
  },
  description:{
    fontSize: 43
  },
  message:{
    fontSize : 25
  }
})

export default CurrentWeather