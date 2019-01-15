import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services';
import { Player } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css']
})
export class PlayerNewComponent implements OnInit {

  player: Player;
  error: String;

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.player = { name: '' };
  }

  onSubmit(): void {
    this.playerService.makePlayer(this.player).subscribe(
      player => {
      console.log('created', player);
      this.router.navigate(['players/list']);
      },
      error => {
      console.log('error', error);
      this.error = error;
    });
  }

}
