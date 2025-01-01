import {DrankPrijs} from '../drankprijs';

export interface DrankkaartItem {
  titel: string;
  omschrijving1: string;
  omschrijving2: string;
  omschrijving3: string;
  omschrijving4: string;
  fles: DrankPrijs;
  glas: DrankPrijs;
}
