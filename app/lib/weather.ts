export function getWeatherIconSrc(weatherCode: number) {
  switch (weatherCode) {
    case 0:
      return "/images/icon-sunny.webp";
    case 2:
      return "/images/icon-partly-cloudy.webp";
    case 3:
      return "/images/icon-overcast.webp";
    case 45:
    case 48:
      return "/images/icon-fog.webp";
    case 51:
    case 53:
    case 55:
      return "/images/icon-drizzle.webp";
    case 61:
    case 63:
    case 65:
      return "/images/icon-rain.webp";
    case 71:
    case 73:
    case 75:
      return "/images/icon-snow.webp";
    case 95:
      return "/images/icon-storm.webp";
    default:
      return "";
  }
}
