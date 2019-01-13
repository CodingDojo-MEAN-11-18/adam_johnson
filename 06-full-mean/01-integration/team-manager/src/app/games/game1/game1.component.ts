import { Component, OnInit } from '@angular/core';
import { Player } from '../../models';
import { PlayerService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {

  players: Player[];


  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.findPlayers();
  }
  findPlayers() {
    this.playerService.getPlayers().subscribe(players => {
      console.log(players);
      this.players = players;
    });
  }
}
