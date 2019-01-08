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
  error: Object;

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.player = { name: '' };
  }

  onSubmit() {
    this.playerService.makePlayer(this.player).subscribe(data => {
      console.log(data);
      this.error = data;
      this.router.navigate(['players/list']);
    });
  }

}
