import React, { useEffect, useState } from 'react'
import { fetchOpenWeatherData, OpenWeatherData } from '../../utils/api'
import { Card, CardContent, Typography, Box } from '@material-ui/core'

const WeatherCardContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Box mx={"4px"} my={"16px"}>
        <Card>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    </Box>
}

type WeatherCardState = 'loading' | 'error' | 'ready'


const WeatherCard: React.FC<{
    city: string,
}> = ({ city }) => {
    const [weatherData, setWeatherData] = useState<OpenWeatherData | null>(null)

    const [cardState, setCardState] = useState<WeatherCardState>('loading')


    useEffect(() => {
        fetchOpenWeatherData(city)
            .then(data => {
                setWeatherData(data)
                setCardState('ready')
            }).catch(err => {
                console.log(err);
                setCardState('error')
            })
    }, [city])
    if (cardState == 'loading' || cardState == 'error') {
        return <WeatherCardContainer>
            <Typography variant='body1'>
                {cardState == 'loading' ? 'Loading...' : 'Error! Could not retrieve weather data for this city'}
            </Typography>
        </WeatherCardContainer>
    }
    return (
        <WeatherCardContainer>
            <Typography variant='h5'>
                {weatherData.name}
            </Typography>
            <Typography variant='body1'>
                {Math.round(weatherData?.main.temp)}
            </Typography>
            <Typography variant='body1'>
                Feels like   {Math.round(weatherData?.main.feels_like)}
            </Typography>
        </WeatherCardContainer>
    )
}

export default WeatherCard