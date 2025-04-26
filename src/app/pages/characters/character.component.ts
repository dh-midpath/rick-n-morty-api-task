import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characters: any[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.characters = this.route.snapshot.data['data'].results;
    console.log(this.characters)
  }
}
