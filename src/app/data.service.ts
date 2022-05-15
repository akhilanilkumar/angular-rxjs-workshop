import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { Post } from "../app/model.interface";

@Injectable({
  providedIn: "root"
})
export class DataService {
  loadPosts(): Observable<Post[]> {
    return Observable.create((observer: Observer<Post[]>) => {
      // Fetch will return a promise
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((body) => {
          observer.next(body);
          observer.complete();
        });
    });
  }
}
