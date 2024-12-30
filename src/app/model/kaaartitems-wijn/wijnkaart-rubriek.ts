import {WijnKaartSubRubriek} from './wijnkaart-subrubriek';

export interface WijnkaartRubriek {
  rubriek: string;
  subRubrieken: WijnKaartSubRubriek[];
}
