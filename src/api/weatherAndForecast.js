import axios from "axios";

async function getWeatherAndForecast(coordinates) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?",
    
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        exclude: "minutely,hourly,alerts",
        appid: "ac6d215115109098673e2b056d63ff09",
        units: "metric"
      }
    }
  );

  return response;
}

export default getWeatherAndForecast;
