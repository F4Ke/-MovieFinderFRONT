import { Component } from '@angular/core';
import { ApiCallerService } from './api-caller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieFinder - Prototype [Work In Progess]';

  public title_search = "";
  public first_search_ok = false;
  public discovery_search_ok = false;

  public page = 1;

  public found_list = [] 
  public discover_list = [] 

  // adult: false
  // backdrop_path: "path url à concat"
  // genre_ids: []
  // id: 382822
  // original_language: "en"
  // original_title: "..."
  // overview: "...."
  // popularity: 0.6
  // poster_path: "path url à concat"
  // release_date: "2015-03-18"
  // title: "The Wanderer"
  // video: false
  // vote_average: 0
  // vote_count: 0
  // IMG exemple : 
  // "https://image.tmdb.org/t/p/w1280/" + movie.backdrop_path 
  // "https://image.tmdb.org/t/p/w1280/" + movie.poster_path 


  constructor(private apiCallerService: ApiCallerService) { 
    console.log("service start")
  }

  public search()
  {
    this.found_list = []
    this.first_search_ok = false;
    this.apiCallerService.search(this.title_search, this.page).subscribe(result => {
      this.found_list = result["results"];
      this.first_search_ok = true;
    });
  }

  public goWithMovie(movie){
    this.discover_list = []
    let genre_ids = movie.genre_ids
    this.first_search_ok = false;
    this.apiCallerService.discover(genre_ids.toString(), this.page).subscribe(result => {
      this.discover_list = result["results"];
      this.discovery_search_ok = true;
    });

  }
}
