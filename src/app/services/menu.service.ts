import {HttpClient} from '@angular/common/http';
import {Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {MenuProduct} from '../model/menuproduct';
import {KaartItem} from '../model/kaart-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly ASSETS_DATA_URL = 'assets/data/eten';

  constructor(private http: HttpClient) {

  }

  public getMenuProducten(): Observable<MenuProduct[]> {
    return this.http.get<MenuProduct[]>(this.ASSETS_DATA_URL + '/menuproducten.json');
  }

  public getAperitiefAmu(): Observable<KaartItem[]> {
    return this.http.get<KaartItem[]>(this.ASSETS_DATA_URL + '/aperitiefAmu.json');
  }

  public getAmukes(): Observable<KaartItem[]> {
    return this.http.get<KaartItem[]>(this.ASSETS_DATA_URL + '/amukes.json');
  }

  public getDesserten(): Observable<KaartItem[]> {
    return this.http.get<KaartItem[]>(this.ASSETS_DATA_URL + '/nagerechten.json');
  }


}
