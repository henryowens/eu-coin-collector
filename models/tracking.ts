export interface IPApiResponse {
  as: string;
  city: string;
  country: string;
  countryCode: string;
  isp: string;
  lat: number;
  lon: number;
  org: string;
  query: string;
  region: string;
  regionName: string;
  status: string;
  timezone: string;
  zip: string;
}

export type IdentifyRequest = Partial<{
  ip: string;
  location: Partial<{
    countryCode: string;
    zipcode: string;
    city: string;
    country: string;
    region: string;
    latitude: number;
    longitude: number;
    timezone: string;
  }>;
}>;
