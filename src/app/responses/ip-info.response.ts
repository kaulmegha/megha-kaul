import {Converter, StaticImplements} from './converter';
import {IpInfo} from '../models/ip-info/ip-info';

export interface IpInfoResponse {
  status: string;  // 'success'
  country: string; // 'United States'
  countryCode: string; // 'US'
  region: string; // 'OR'
  regionName: string; // 'Oregon'
  city: string; // 'Portland'
  zip: string; // '97225'
  lat: number; // 45.5033
  lon: number; // -122.7744
  timezone: string; // 'America/Los_Angeles'
  isp: string; // 'Comcast Cable Communications, LLC'
  org: string; // 'Comcast IP Services, L.L.C.'
  as: string; // 'AS7922 Comcast Cable Communications, LLC'
  query: string; // '73.157.136.242'
}

// ip: "73.157.136.242"
// hostname: "c-73-157-136-242.hsd1.or.comcast.net"
// city: "Beaverton"
// region: "Oregon"
// country: "US"
// loc: "45.4871,-122.8037"
// org: "AS7922 Comcast Cable Communications, LLC"
// postal: "97075"
// timezone: "America/Los_Angeles"

@StaticImplements<Converter<IpInfoResponse, IpInfo>>()
export class IpInfoConverter {
  static convert(from) {
    return new IpInfo(
      from.status,
      from.country,
      from.countryCode,
      from.regionName,
      from.city,
      from.zip,
      from.lat,
      from.lon,
      from.timezone,
      from.isp,
      from.org,
      from.as,
      from.query,
    );
  }
}
