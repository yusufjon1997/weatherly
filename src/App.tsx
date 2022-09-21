import { useEffect, useState , useCallback } from 'react'
import { Chart, Searchbar, MainCard, FooterCard, Weekdays } from 'components';
import { WeatherType } from './types';
import getWeatherData from 'services'
import './App.css'



function App() {
  const [query, setQuery] = useState({ q: 'Tashkent' })
  const units = 'metric';
  const [weather, setWeather] = useState<WeatherType>()
  const [activeDay , setActiveDay] = useState("");

  useEffect(() => {
    const fetchweatherData = async () => {
      await getWeatherData({ ...query , units }).then((data) => {
        setWeather(data)
        const daily = data.daily[0];
        setActiveDay(daily?.title);
      })
    }
    fetchweatherData()
  }, [query])


  const changeActiveDay = useCallback((day : string) => {
      setActiveDay(day)
  }, [activeDay]);


  return (
    <div className='main-page'>
      <div className='main'>
        <div className='container'>
          <div className='row'>
            <div className='left col-md-5'>
              <div className='container'>
                {
                  weather && <>
                    <Searchbar query={query} setQuery={setQuery} />
                    <MainCard weather={weather} />
                    <FooterCard weatherInfo={weather.daily} />
                  </> 
                }
              </div>
            </div>
            <div className='right col-md-7'>
              <div className='container'>
              {
                weather && activeDay &&
                <>
                  <Chart activeDay={activeDay} hourly={weather.hourly} />
                  <Weekdays daily={weather?.daily} changeActiveDay={changeActiveDay} activeDay={activeDay} />
                </>
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
