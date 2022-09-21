import umbrellaIcon from '../../assets/icons/umbrella.svg'
import jacketIcon from '../../assets/icons/jacket.svg'
import './style.css';
import { getDayName } from 'helpers';
import { Daily } from 'types';


type FooterType = {
  weatherInfo : Array<Daily>
} 

const FooterCard = ({ weatherInfo } : FooterType ) => {
  
    const filtered1 = weatherInfo.find(day => day.main === "Clouds" || day.main === "Wind" || day.main == "Snow");
    const filtered2 = weatherInfo && weatherInfo.find(day => day.main === "Rain");
    
    const JacketDay = filtered1 ? filtered1.title : "Mon"
    const UmbrelaDay = filtered2 ? filtered2?.title : "Mon";

  return (
    <div className='footer-card'>
      <div className='d-flex align-items-center m-2'>
        <h5 className='footer-text'>{getDayName(JacketDay)} is best day to sell</h5>
        <img src={jacketIcon} width='32px' height='32px' alt='location' />
      </div>
      <div className='d-flex align-items-center'>
        <h5 className='footer-text'>{getDayName(UmbrelaDay)} is best day to sell</h5>
        <img src={umbrellaIcon} width='32px' height='32px' alt='location' />
      </div>
    </div>
  )
}

export default FooterCard
