import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { PlayerNewComponent } from './players/player-new/player-new.component';
import { Game1Component } from './games/game1/game1.component';
import { Game2Component } from './games/game2/game2.component';
import { Game3Component } from './games/game3/game3.component';
import { StatusComponent } from './games/status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerNewComponent,
    Game1Component,
    Game2Component,
    Game3Component,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
