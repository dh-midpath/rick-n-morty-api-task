import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-welcome',
  templateUrl: './normal2.component.html',
  styleUrls: ['./normal2.component.scss']
})
export class Normal2Component {
  locations: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://rickandmortyapi.com/api/location').subscribe((response: any) => {
      this.locations = response.results;
    });
  }
}
