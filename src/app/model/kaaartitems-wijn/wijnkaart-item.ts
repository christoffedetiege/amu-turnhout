import {DrankPrijs} from "../drankprijs";

export interface WijnkaartItem {
  chateau: string;
  druiven: string;
  oorsprong: string;
  omschrijving: string;
  fles: DrankPrijs;
  glas: DrankPrijs;
}
