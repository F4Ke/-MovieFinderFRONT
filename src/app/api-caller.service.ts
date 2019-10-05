import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiCallerService {

  public base_url = environment.api_url;
  public search_url = this.base_url + "simple_search"
  public discover_url = this.base_url + "discover"

  constructor(private http: HttpClient) { 
    console.log("service start")
  }


  public search(title, page){
    let url = this.search_url + ("?title=" + title) + ("&page=" + page.toString() )
    
    console.log("url")
    console.log(url)
    
    return this.http.get(url).pipe(map(data => data));
  }

  public discover(genre_ids, page){
    let url = this.discover_url + ("?genre_ids=" + genre_ids) + ("&page=" + page.toString() )
    
    console.log("url")
    console.log(url)
    
    return this.http.get(url).pipe(map(data => data));
  }

}
