import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerNewComponent } from './players/player-new/player-new.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { Game1Component } from './games/game1/game1.component';
import { Game2Component } from './games/game2/game2.component';
import { Game3Component } from './games/game3/game3.component';
import { StatusComponent } from './games/status/status.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full'
  },
  {
    path: 'players',
    children: [
      {
        path: 'list',
        component: PlayerListComponent
      },
      {
        path: 'new',
        component: PlayerNewComponent
      }
    ]
  },
    {
      path: 'status',
      component: StatusComponent,
      children: [
        {
          path: 'game/1',
          component: Game1Component
        },
        {
          path: 'game/2',
          component: Game2Component
        },
        {
          path: 'game/3',
          component: Game3Component
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
