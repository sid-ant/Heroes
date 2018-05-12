import { Component, OnInit } from '@angular/core';
import { heroes } from '../heroes'; 

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  // hero = 'KnightNight';

  hero : heroes ={
    id : 1,
    name : 'BubbleGumMaster', 
  }; 

  constructor() { }

  ngOnInit() {
  }

}
