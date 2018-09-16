import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { 
  }

  public readFile(file:string, callback) {
    this.http.get(file, {'responseType':'text'}).subscribe(data=>callback(data));
  }

  public readJson(file:string, callback) {
    this.http.get(file, {responseType:"json"}).subscribe(data=>callback(data));
  }
}
