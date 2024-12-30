import {DrankPrijs} from '../drankprijs';

export interface DrankkaartItem {
  titel: string;
  omschrijving: string;
  fles: DrankPrijs;
  glas: DrankPrijs;
}
