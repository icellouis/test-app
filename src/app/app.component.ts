import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  response: any;
  param: string;
  selected: any;

  constructor(private http: HttpClient) {
    this.selected = {
      people: false,
      starships: false,
      species: false,
      planets: false
    };
  }

  makeRequest() {
    this.checkValue();
    this.http.get("https://swapi.co/api/" + this.param).subscribe(data => {
      this.response = data["results"];
      console.log(data);
    });
  }

  checkValue() {
    for (const key in this.selected) {
      this.selected[key] = false;
    }
    this.selected[this.param] = true;
  }
}
