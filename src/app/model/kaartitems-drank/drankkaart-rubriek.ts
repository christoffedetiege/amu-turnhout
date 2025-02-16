import {DrankkaartSubrubriek} from './drankkaart-subrubriek';

export interface DrankkaartRubriek {
  titel: string;
  items: DrankkaartSubrubriek[];
  volume: string;
  hideGlas: boolean;
  hideFles: boolean;
}
