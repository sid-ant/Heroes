import { Component, OnInit, Input } from '@angular/core';
import { heroes } from '../heroes'; 

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() hero: heroes; 

}
