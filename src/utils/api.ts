const OPEN_WEATHER_API_KEY = "2633ea074d9d1726782176591a7e85fd";

export interface OpenWeatherData {
  name: string;
  main: {
    feels_alike: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  }[];
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
}

export async function fetchOpenWeatherData(city: string): Promise<any> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
  );
  if (!res.ok) {
    throw new Error("City not found");
  }
  const data: OpenWeatherData = await res.json();
  //   data.main.temp_max
  return data;
}
