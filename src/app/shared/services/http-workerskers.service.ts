import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyWorker } from '../worker.model';

@Injectable({
  providedIn: 'root'
})
export class HttpWorkerskersService {
  routeApi = 'http://localhost:3000/workers'

  constructor(
    private http: HttpClient
  ) { }

  getWorkers(): Promise<any>{
    return this.http.get(this.routeApi).toPromise();
  }

  postWorker(data: MyWorker){
    return this.http.post(this.routeApi, data).toPromise();
  }

  putWorker(data: MyWorker){
    return this.http.put(this.routeApi+`/${data.id}`, data).toPromise();
  }

  deleteWorker(id){
    return this.http.delete(this.routeApi+`/${id}`).toPromise();
  }
}