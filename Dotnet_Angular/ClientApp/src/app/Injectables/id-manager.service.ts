import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdManagerService {
  private idTracker = 0;

  constructor() { }

  public generateId(prefix: string) : string{
    return prefix + this.idTracker++;
  }
}
