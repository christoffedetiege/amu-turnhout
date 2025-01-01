import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, of, forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';
import {DrankService} from '../services/drank.service';
import {DrankKaart} from '../model/kaartitems-drank/drankkaart';

@Injectable({
  providedIn: 'root',
})
export class DrankKaartResolver implements Resolve<DrankKaart> {
  constructor(private drankService: DrankService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DrankKaart> {
    const routePath = route.routeConfig?.path;
    switch (routePath) {
      case 'aperitief':
        return this.getAperitievenDrankkaart();
      case 'alcoholvrij':
        return this.getAlcoholVrijDrankkaart();
      case 'warmedranken':
        return this.getWarmedrankenDrankkaart();
      default:
        return of({rubrieken: []}); // Standaard lege drankkaart
    }
  }

  private getAperitievenDrankkaart(): Observable<DrankKaart> {
    return forkJoin({
      aperitieven: this.drankService.getAperBierFris(),
      gins: this.drankService.getGin(),
    }).pipe(
      map(({aperitieven, gins}) => {
        const aperitievenRubrieken = aperitieven.rubrieken || [];
        const ginsRubrieken = gins.rubrieken || [];
        const combinedRubrieken = aperitievenRubrieken.concat(ginsRubrieken);

        const drankKaart = {rubrieken: combinedRubrieken} as DrankKaart;
        console.log('Combined rubrieken:', combinedRubrieken);

        const gewensteVolgorde = [
          'Aperitief',
          'Eens iets anders',
          'Gins',
          'Stoere bubbels',
          'Frisdrank',
        ];

        drankKaart.rubrieken.sort(
          (a, b) =>
            gewensteVolgorde.indexOf(a.titel) - gewensteVolgorde.indexOf(b.titel)
        );


        // Return een nieuw DrankKaart-object
        return {rubrieken: combinedRubrieken} as DrankKaart;
      })
    );
  }

  private getAlcoholVrijDrankkaart(): Observable<DrankKaart> {
    return this.drankService.getAlcoholVrij()
      .pipe(
        map((drankkaart) => {
          const rubrieken = drankkaart.rubrieken || [];
          return {rubrieken} as DrankKaart;
        })
      );
  }

  private getWarmedrankenDrankkaart(): Observable<DrankKaart> {
    return this.drankService.getKoffieThee()
      .pipe(
        map((drankkaart) => {
          const rubrieken = drankkaart.rubrieken || [];
          return {rubrieken} as DrankKaart;
        })
      );
  }
}
