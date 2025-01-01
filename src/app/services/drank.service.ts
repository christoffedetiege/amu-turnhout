import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {WijnKaart} from '../model/kaaartitems-wijn/wijnkaart';
import {DrankKaart} from '../model/kaartitems-drank/drankkaart';
import {DrankkaartItem} from "../model/kaartitems-drank/drankkaart-item";


@Injectable({
  providedIn: 'root'
})
export class DrankService {

  private readonly ASSETS_DATA_URL = 'assets/data/dranken';

  constructor( private http: HttpClient) { }

  public getWijnKaart(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/wijn.json');
  }
  public getWijnSuggestie(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/wijnsuggesties.json');
  }
  public getWhiskey(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/whisky.json');
  }
  public getGin(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/gins.json');
  }
  public getAlcoholVrij(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/alcoholVrijeAperitief.json');
  }
  public getAperBierFris(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/aperoBierFris.json');
  }
  public getKoffieThee(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/warmedranken.json');
  }
  public getDigestieven(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/digestieven.json');
  }
  public getDigestievenGemengd(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/digestievengemengd.json');
  }
  public getGrappa(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/grappa.json');
  }
  public getBierSuggestie(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/biersuggestie.json');
  }
  public getDessertWijn(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/dessertwijnen.json');
  }
  public getDessertWijn2(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/dessertwijnen2.json');
  }
  public getSuggestieDigestief(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/suggestiedigestief.json');
  }
  public getBierSuggesties(): Observable<DrankKaart> {
    return this.http.get<DrankKaart>(this.ASSETS_DATA_URL + '/biersuggesties.json');
  }



}
