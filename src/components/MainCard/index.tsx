import locationIcon from '../../assets/icons/locationIcon.png'
import sunny from '../../assets/images/sunny.png'
import humidityIcon from '../../assets/icons/humidity.png'
import windSpeedIcon from '../../assets/icons/wind-speed.png';
import { getCountryName , getWeatherImage } from 'helpers';
import { WeatherType } from 'types';
import './style.css';

type MainCard = {
  weather : WeatherType
}


const MainCard = ({ weather } : MainCard) => {

  return (
    <div className='main-card container'>
      <div className='d-flex align-items-end justify-content-between'>
        <div>
          <div className='d-flex justify-content-center text-center'>
            <h1 style={{ fontSize: '120px' }}>{weather.temp.toFixed(1)}</h1>
            <h2>℃</h2>
          </div>

          <div className='weather-info d-flex justify-content-around'>
            <div className='d-flex align-items-center mr-3'>
              <img src={humidityIcon} width='32px' height='32px' alt='location' />
              <p className='m-0'>{weather.humidity}%</p>
            </div>
            <div className='d-flex align-items-center mr-3'>
              <img src={windSpeedIcon} width='32px' height='32px' alt='location' />
              <p className='m-0'>{weather.speed} m/s</p>
            </div>
          </div>
        </div>
        <div>
          {getWeatherImage(weather.main , '240px', '180px')}
          <h5 className='text-center'>{weather?.description}</h5>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center mt-4'>
        <img src={locationIcon} width='32px' height='32px' alt='location' />
        <h3 className='m-0'>{weather.name} , {getCountryName(weather?.country)}</h3>
      </div>
    </div>
  )
}

export default MainCard
