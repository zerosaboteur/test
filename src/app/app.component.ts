import { Component } from '@angular/core';
import {WeatherForecast} from "./test.model";

let asd: WeatherForecast = {} // This one is working fine

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public asd: WeatherForecast = {} // This does not work
  title = 'untitled';
}
