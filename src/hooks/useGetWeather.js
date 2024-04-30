import React, {useState, useEffect} from 'react'
import * as Location from 'expo-location'
import {WEATHER_API_KEY} from '@env'

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])   //passing a null array
    const [lat,setLat] = useState([])
    const [lon,setLon] = useState([])

    const fetchWeatherData = async() => {
        try {
          const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
          const data = await res.json()
          setWeather(data)
        } catch (error) {
          setError('could not fetch weather')
        } finally {          //execute something after try catch has been completed
          setLoading(false)
        }
      }
    
      useEffect(() => {
        ;(async () => {
          let { status } = await Location.requestForegroundPermissionsAsync()
          if( status !== 'granted') {
            setError('permission to access location was denied')
            return
          }
          let location = await Location.getCurrentPositionAsync({})
              setLat(location.coords.latitude) 
              setLon(location.coords.longitude)
              await fetchWeatherData()
        })() //immediately invoke at the end of the function we use parenthesis
      }, [lat, lon]) //empty array when there are no dependencies n useEffect will run only once when the component first renders
    
      
    return[loading, error, weather]
}