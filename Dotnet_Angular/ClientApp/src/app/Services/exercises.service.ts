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

  public test(duration: number) {
    return this.http.post(this.accessPointUrl + '/test', duration, { headers: this.headers, responseType: 'text' });
  }

  public exercise(apiPath: string, payload: {}) {
    // commas around payload necessary as apiController expects a JSON format because of [FromBody] attr
    return this.http.post(this.accessPointUrl + apiPath,
      Object.keys(payload).length === 1 ? JSON.stringify(payload[Object.keys(payload)[0]]) : JSON.stringify(payload), { headers: this.headers });
  }
}
