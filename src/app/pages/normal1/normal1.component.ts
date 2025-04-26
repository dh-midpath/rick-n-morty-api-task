import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-welcome',
  templateUrl: './normal1.component.html',
  styleUrls: ['./normal1.component.scss']
})
export class Normal1Component {
  characters: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://rickandmortyapi.com/api/character').subscribe((response: any) => {
      this.characters = response.results;
    });
  }
}
