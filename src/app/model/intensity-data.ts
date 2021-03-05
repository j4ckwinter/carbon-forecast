import { GenerationMix } from './generation-mix';
import { Intensity } from './intensity';

export interface IntensityData {
  from: string;
  to: string;
  intensity: Intensity;
  generationmix: GenerationMix;
}
