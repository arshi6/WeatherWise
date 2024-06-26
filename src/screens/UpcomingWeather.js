import React from 'react'
import { SafeAreaView,
     StyleSheet,
     FlatList,
     StatusBar,
     ImageBackground } from 'react-native'
import Listitem from '../components/Listitem'

const UpcomingWeather = ({weatherData}) => {
    const renderItem = ({item}) => (
    <Listitem 
          dt_txt = {item.dt_txt}
          condition={item.weather[0].main} 
          min= {item.main.temp_min} 
          max = {item.main.temp_max}
     />
    ) 
     const {container,image } = styles
     
  return (
    <SafeAreaView style = {container}>
      <ImageBackground 
      source={require('../../assets/upcoming-background.jpg')} 
      style={image}>

      <FlatList 
      data={weatherData} 
      renderItem={renderItem}
      keyExtractor = {(item) => item.dt_txt}
       />
       </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor : 'royalblue'
    },
    image :{
        flex :  1
    }
})

export default UpcomingWeather