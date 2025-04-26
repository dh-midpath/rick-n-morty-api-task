import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  locations: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.locations = this.route.snapshot.data['data'].results;
    console.log(this.locations);
  }
}
