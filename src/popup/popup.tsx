import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './popup.css'
import WeatherCard from './WeatherCard'

const App: React.FC<{}> = () => {
  return (
    <div>
      <WeatherCard city='Toronto' />
      <WeatherCard city='New York' />
      <WeatherCard city='Error' />
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)
