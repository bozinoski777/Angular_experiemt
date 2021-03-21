import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  choices: any[];
  chosen: things[];

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.choices = Array(9).fill(null);
    this.chosen = Array(20).fill(null);
  }

}
