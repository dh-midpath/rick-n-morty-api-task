import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {
  episodes: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.episodes = this.route.snapshot.data['data'].results;
    console.log(this.episodes);
  }
}
