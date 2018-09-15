import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'api/exercises';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  public test(duration) {
    return this.http.post(this.accessPointUrl + '/test', duration, { headers: this.headers, responseType: 'text' });
  }

  public exercise(apiPath, payload) {
    // commas around payload necessary as apiController expects a JSON format because of [FromBody] attr
    return this.http.post(this.accessPointUrl + apiPath, "'" + payload + "'", { headers: this.headers });
  }
}
