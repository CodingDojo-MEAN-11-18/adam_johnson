import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  city = "Dallas";
  avg_temp: number;
  min_temp: number;
  max_temp: number;
  status: string;
  humidity: number;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather(this.city)
  }

  getWeather(city:string) {
    let observable = this._httpService.getWeather(this.city);
    observable.subscribe(data => {
      console.log('Got Weather', data.main.temp);
      this.avg_temp = data.main.temp;
      this.min_temp = data.main.temp_min;
      this.max_temp = data.main.temp_max;
      this.humidity = data.main.humidity;
      for (const item of data.weather){
        console.log(item.description)
        this.status = item.main
      }
    })
  }

}
