export type Description = {
    id : number ,
    main : string ,
    icon : string,
    description : string
}

export type Hourly = {
    time : number,
    temp : number,
    day : string,
}

export type Daily = {
    title : string,
    temp : number,
    main : string
}


export type WeatherType = {
    country : string,
    daily : Array<Daily>
    hourly : Array<Hourly>,
    description : string,
    main : string,
    dt : number ,
    name : string,
    speed : number ,
    humidity : number ,
    timezone : string,
    temp : number,
}