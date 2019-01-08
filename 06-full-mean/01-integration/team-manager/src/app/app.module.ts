import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { PlayerNewComponent } from './players/player-new/player-new.component';
import { PlayerStatusComponent } from './players/player-status/player-status.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerNewComponent,
    PlayerStatusComponent
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
