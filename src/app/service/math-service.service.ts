import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MathServiceService {

  private endpoint: String = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  calculCircleArea(radius: number) {
    return this.httpClient.post<any>(this.endpoint + "/circleArea", { radius:radius });
  }

  calculCirclePerimeter(radius: number) {
    return this.httpClient.post<any>(this.endpoint + "/circlePerimeter", { radius:radius });
  }

}