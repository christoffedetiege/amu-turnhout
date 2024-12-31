import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MenuComponent} from './components/menu/menu.component';
import {DrankenComponent} from './components/dranken/dranken.component';
import {AlcoholvrijComponent} from './components/dranken/alcoholvrij/alcoholvrij.component';
import {AperitievenComponent} from './components/dranken/aperitieven/aperitieven.component';
import {WijnsuggestieComponent} from './components/wijn/wijnsuggestie/wijnsuggestie.component';
import {BierSuggestiesComponent} from './components/dranken/bier-suggesties/bier-suggesties.component';
import {WijnkaartComponent} from './components/wijn/wijnkaart/wijnkaart.component';
import {WarmedrankenComponent} from './components/dranken/warmedranken/warmedranken.component';
import {DigestievenComponent} from './components/dranken/digestieven/digestieven.component';
import {ReserverenComponent} from './components/reserveren/reserveren.component';
import {GinComponent} from './components/dranken/gin/gin.component';
import {TakewayComponent} from './components/takeway/takeway.component';
import {WhiskeyComponent} from './components/dranken/whiskey/whiskey.component';
import {ImpressiesComponent} from './components/impressies/impressies.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'dranken', component: DrankenComponent },
  { path: 'alcoholvrij', component: AlcoholvrijComponent },
  { path: 'aperitief', component: AperitievenComponent },
  { path: 'wijnsuggestie', component: WijnsuggestieComponent },
  { path: 'biersuggestie', component: BierSuggestiesComponent },
  { path: 'wijnkaart', component: WijnkaartComponent },
  { path: 'warmedranken', component: WarmedrankenComponent },
  { path: 'digestieven', component: DigestievenComponent },
  { path: 'reserveren', component: ReserverenComponent },
  // { path: 'impressies', component: ImpressiesComponent },
  { path: 'whisky', component: WhiskeyComponent },
  { path: 'gin', component: GinComponent },
  { path: 'takeaway', component: TakewayComponent },
  { path: 'impressies', component: ImpressiesComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
