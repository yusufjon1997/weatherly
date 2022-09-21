import './style.css';
import { Daily } from 'types';
import { getDayName, getWeatherImage } from 'helpers';

type WeekdaysType = {
  daily : Array<Daily>,
  changeActiveDay : any,
  activeDay : string
}


const Weekdays = ({ daily , changeActiveDay , activeDay} : WeekdaysType) => {
  


  return (
    <div className='weekdays'>
        { daily.length > 0 && daily.map(day => {
            return <div className={`day ${day.title === activeDay ? 'active' : ''}`} key={day.title} onClick={() => changeActiveDay(day.title)}>
            {getWeatherImage(day.main , "110px","90px")}
            <div className='day-temp d-flex'>
              <h5>{day.temp.toFixed(1)}</h5>
              <p>℃</p>
            </div>
            <h5 className='day-text'>{getDayName(day.title)}</h5>
          </div>
        })}
    </div>
  )
}

export default Weekdays
