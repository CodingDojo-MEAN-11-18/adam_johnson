import { Component, OnInit } from '@angular/core';
import { Player } from '../../models';
import { PlayerService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {

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
