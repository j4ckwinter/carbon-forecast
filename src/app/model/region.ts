import { IntensityData } from './intensity-data';

export interface Region {
  regionid: number;
  dnoregion: string;
  shortname: string;
  postcode: string;
  data: IntensityData[];
}
