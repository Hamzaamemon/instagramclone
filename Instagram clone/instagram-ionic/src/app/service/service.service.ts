import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Data() {
    return this.http.get("https://randomuser.me/api/?page=1&results=20&seed=feed");
  }
}
