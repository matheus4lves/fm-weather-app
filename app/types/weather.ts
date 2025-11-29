export type TemperatureUnit = "°C" | "°F";
export type PrecipitationUnit = "mm" | "inch";
export type WindSpeedUnit = "kmh" | "mph";

export interface CurrentWeatherData {
  apparent_temperature: number;
  precipitation: number;
  relative_humidity_2m: number;
  temperature_2m: number;
  time: string;
  wind_speed_10m: number;
  weather_code: number;
}

export interface CurrentWeatherUnits {
  apparent_temperature: TemperatureUnit;
  precipitation: PrecipitationUnit;
  relative_humidity: "%";
  temperature_2m: TemperatureUnit;
  time: "iso8601";
  wind_speed_10m: WindSpeedUnit;
}

export interface DailyForecastData {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
  weather_code: number[];
}

export interface HourlyForecastData {
  temperature_2m: number[];
  time: string[];
  weather_code: number[];
}

export interface HourlyForecastCardProps {
  time: string;
  temperature: number;
  weatherCode: number;
}

export interface WeatherApiSuccess {
  current?: CurrentWeatherData;
  current_units?: CurrentWeatherUnits;
  daily?: DailyForecastData;
  hourly?: HourlyForecastData;
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface WeatherApiError {
  error: true;
  reason: string;
}
