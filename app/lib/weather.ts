export function getWeatherIconSrc(weatherCode: number) {
  switch (weatherCode) {
    case 0:
    case 1:
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
    case 56:
    case 57:
      return "/images/icon-drizzle.webp";
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return "/images/icon-rain.webp";
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return "/images/icon-snow.webp";
    case 95:
    case 96:
    case 99:
      return "/images/icon-storm.webp";
    default:
      return "";
  }
}
