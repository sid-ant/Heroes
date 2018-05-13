import { Component, OnInit } from '@angular/core';
import { heroes } from '../heroes'; 
import { HEROES } from '../mock-heroes'; 

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  // hero = 'KnightNight';

  // hero : heroes ={
  //   id : 1,
  //   name : 'BubbleGumMaster', 
  // }; 

  characters = HEROES; 


  constructor() { }

  ngOnInit() {
  }

  selectedHero: heroes;

  onSelect(hero: heroes): void {
    this.selectedHero = hero;
  }



}
