import React from 'react'
import {ActivityIndicator, View, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'
import Registerpage from './src/screens/Registerpage'
//import City from './src'

const App = () => {
  const [loading,error,weather] = useGetWeather()
  if(weather && weather.list && !loading){  //if weather exists with the data we will render otherwise show the activityindicator
    return (
        //<View style={styles.container}>
     <NavigationContainer>
    <Tabs weather={weather} />
   {/* //<Registerpage/> */}
    </NavigationContainer>
    //</View>
    )
  }

    return (
      <View style = {styles.container}>
        {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
    )
  }

const styles = StyleSheet.create(
  {
    container : {
      justifyContent : 'center',
      flexDirection : 'center',
      flex : 1
    }
  })

export default App