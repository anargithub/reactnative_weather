import axios from "axios";

const APIKEY= "59c663ef248c443d812193626241303";
const forecastEndpoint= params=>`https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${params.cityName}&days=${params.days}`;
const locationsEndpoint= params=>`https://api.weatherapi.com/v1/search.json?key=${APIKEY}&q=${params.cityName}`;

const apiCall= async(endpoint)=>{
    const options ={
        method: "GET",
        url: endpoint,
    }
    try{
        const response = await axios.request(options);
        return response.data;
    }catch(err){
        console.log('error: ', err);
        return null
    }
}
export const fetchWeatherForecast = params=>{
    return apiCall(forecastEndpoint(params))
}
export const fetchLocations = params=>{
    return apiCall(locationsEndpoint(params))
}