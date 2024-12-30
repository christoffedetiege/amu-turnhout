import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {MenuComponent} from './components/menu/menu.component';
import {DrankenComponent} from './components/dranken/dranken.component';
import {ReserverenComponent} from './components/reserveren/reserveren.component';
import {ImpressiesComponent} from './components/impressies/impressies.component';
import {TakewayComponent} from './components/takeway/takeway.component';
import {NaviagationComponent} from './components/naviagtion/naviagation.component';
import {DranknavigatieComponent} from './components/dranken/dranknavigatie/dranknavigatie.component';
import {AperitievenComponent} from './components/dranken/aperitieven/aperitieven.component';
import {WijnsuggestieComponent} from './components/wijn/wijnsuggestie/wijnsuggestie.component';
import {WijnkaartComponent} from './components/wijn/wijnkaart/wijnkaart.component';
import {FrisdrankenComponent} from './components/dranken/frisdranken/frisdranken.component';
import {WarmedrankenComponent} from './components/dranken/warmedranken/warmedranken.component';
import {DigestievenComponent} from './components/dranken/digestieven/digestieven.component';
import {KaartItemComponent} from './components/kaart-item/kaart-item.component';
import {DessertwijnenComponent} from './components/dranken/dessertwijnen/dessertwijnen.component';
import {WijnKaartItemComponent} from './components/wijn/template-wijn-kaart-item/wijn-kaart-item.component';
import {WhiskeyComponent} from './components/dranken/whiskey/whiskey.component';
import {GinComponent} from './components/dranken/gin/gin.component';
import {ParkingComponent} from './components/parking/parking.component';
import {WijnKaartItemComponent} from './components/wijn/template-wijn-kaart-item/wijn-kaart-item.component';
import {ProductComponent} from './components/product/product.component';
import {BierSuggestiesComponent} from './components/dranken/bier-suggesties/bier-suggesties.component';
import {KaartItemDrankComponent} from './components/dranken/kaart-item-drank/kaart-item-drank.component';
import {MineraleComponent} from './components/minerale/minerale.component';
import {AlcoholvrijComponent} from './components/dranken/alcoholvrij/alcoholvrij.component';
import {HttpClientModule} from '@angular/common/http';
import {GeslotenComponent} from './components/gesloten/gesloten.component';
import {WijnkaartTemplateComponent} from "./components/wijn/template-wijnkaart/wijnkaart-template.component";


@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    HomeComponent,
    MenuComponent,
    DrankenComponent,
    ReserverenComponent,
    ImpressiesComponent,
    TakewayComponent,
    NaviagationComponent,
    DranknavigatieComponent,
    AperitievenComponent,
    WijnsuggestieComponent,
    WijnkaartComponent,
    FrisdrankenComponent,
    WarmedrankenComponent,
    DigestievenComponent,
    KaartItemComponent,
    DessertwijnenComponent,
    WijnKaartItemComponent,
    WhiskeyComponent,
    GinComponent,
    ParkingComponent,
    GeslotenComponent,
    WijnKaartItemComponent,
    ProductComponent,
    BierSuggestiesComponent,
    KaartItemDrankComponent,
    MineraleComponent,
    AlcoholvrijComponent,
    WijnkaartTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
