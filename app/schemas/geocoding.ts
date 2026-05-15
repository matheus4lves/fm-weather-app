import * as z from "zod";

export const CitySchema = z.object({
  admin1: z.string(),
  country: z.string(),
  country_code: z.string(),
  id: z.number(),
  latitude: z.number(),
  longitude: z.number(),
  name: z.string(),
  countryFlagURL: z.optional(z.string()),
  countryFlagAlt: z.optional(z.string()),
});

export const GeocodingApiResponseSchema = z.object({
  results: z.optional(z.array(CitySchema)),
});

export type City = z.infer<typeof CitySchema>;
export type GeocodingApiResponse = z.infer<typeof GeocodingApiResponseSchema>;
