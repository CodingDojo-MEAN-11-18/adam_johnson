import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  city = "Washington";
  avg_temp: number;
  min_temp: number;
  max_temp: number;
  status: string;
  humidity: number;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWeather(this.city);
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
