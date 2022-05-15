import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { Observable, Observer, noop } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Post } from "../app/model.interface";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(
    private service: DataService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    // Here we are converting a promise to an observables
    this.posts$ = this.service.loadPosts().pipe(
      map((posts: Post[]) => posts.map((post: Post) => post)),
      tap(console.log)
    );
  }
}
