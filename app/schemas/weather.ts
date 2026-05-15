import * as z from "zod";

export const TemperatureUnitSchema = z.union([
  z.literal("°C"),
  z.literal("°F"),
]);
export const PrecipitationUnitSchema = z.union([
  z.literal("mm"),
  z.literal("inch"),
]);
export const WindSpeedUnitSchema = z.union([
  z.literal("km/h"),
  z.literal("mp/h"),
]);

export const CurrentWeatherDataSchema = z.object({
  apparent_temperature: z.number(),
  precipitation: z.number(),
  relative_humidity_2m: z.number(),
  temperature_2m: z.number(),
  time: z.string(),
  wind_speed_10m: z.number(),
  weather_code: z.number(),
});

export const CurrentWeatherUnitsSchema = z.object({
  apparent_temperature: TemperatureUnitSchema,
  precipitation: PrecipitationUnitSchema,
  relative_humidity_2m: z.literal("%"),
  temperature_2m: TemperatureUnitSchema,
  time: z.literal("iso8601"),
  wind_speed_10m: WindSpeedUnitSchema,
});

export const DailyForecastDataSchema = z.object({
  temperature_2m_max: z.array(z.number()),
  temperature_2m_min: z.array(z.number()),
  time: z.array(z.string()),
  weather_code: z.array(z.number()),
});

export const HourlyForecastDataSchema = z.object({
  temperature_2m: z.array(z.number()),
  time: z.array(z.string()),
  weather_code: z.array(z.number()),
});

export const WeatherForecastApiResponseSchema = z.object({
  current: z.optional(CurrentWeatherDataSchema),
  current_units: z.optional(CurrentWeatherUnitsSchema),
  daily: z.optional(DailyForecastDataSchema),
  hourly: z.optional(HourlyForecastDataSchema),
  latitude: z.number(),
  longitude: z.number(),
  timezone: z.string(),
});

export type TemperatureUnit = z.infer<typeof TemperatureUnitSchema>;
export type PrecipitationUnit = z.infer<typeof PrecipitationUnitSchema>;
export type WindSpeedUnit = z.infer<typeof WindSpeedUnitSchema>;
export type CurrentWeatherData = z.infer<typeof CurrentWeatherDataSchema>;
export type CurrentWeatherUnits = z.infer<typeof CurrentWeatherUnitsSchema>;
export type DailyForecastData = z.infer<typeof DailyForecastDataSchema>;
export type HourlyForecastData = z.infer<typeof HourlyForecastDataSchema>;
export type WeatherForecastApiResponse = z.infer<
  typeof WeatherForecastApiResponseSchema
>;
