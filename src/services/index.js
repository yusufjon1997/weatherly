import config from 'config';
import { DateTime } from 'luxon';

const formatToLocaleTime = (seconds , zone , format = 'cccc , dd LLL yyyy" | Local time:"hh:mm a') => {
    return DateTime.fromSeconds(seconds).setZone(zone).toFormat(format);
}

const getData = async (infoType , searchParams) => {
    const url = new URL(config.apiBaseUrl + '/' + infoType) ;
    url.search = new URLSearchParams({...searchParams , appid: config.apiKey});
    return await fetch(url).then(res => res.json())
}

const formatCurrentData = (data) => {
    const {
        coord : { lat , lon},
        main : {temp , humidity},
        name ,
        dt ,
        weather ,
        sys : { country},
        wind : {speed}
    } = data;
    
    const description = weather[0].description;
    const main = weather[0].main;
    
    return {lat , lon , temp , humidity , country , name , dt , speed , description , main}
}   


const formatForcastData = (data) => {
    let { timezone , daily , hourly } = data;

    daily = daily.slice(0,5).map(d => {
        const main = d.weather[0].main;
        return {
            title : formatToLocaleTime(d.dt , timezone , 'ccc'),
            temp : d.temp.day,
            main
        }
    });

    hourly = hourly.map(h => {
        return {
            time : formatToLocaleTime(h.dt , timezone , 'hh:mm a'),
            day : formatToLocaleTime(h.dt , timezone , 'ccc'),
            temp : h.temp,
        }
    });
    
    return { timezone , daily , hourly}
}


const getWeatherData = async (searchParams) => {
    const formattedCurrentData = await getData('weather',searchParams).then(formatCurrentData)

    const { lat , lon } = formattedCurrentData;

    const formattedForcastData = await getData('onecall' , {
        lat , lon , exclude : 'minutely,alerts', units: searchParams.units , cnt : 7
    }).then(formatForcastData)
    
    return {...formattedCurrentData , ...formattedForcastData};

}

export default getWeatherData;