import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from '../model/computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  private computerUrl: string;

  constructor(private http: HttpClient) {
    this.computerUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<Computer[]>  {
   return this.http.get<Computer[]>(this.computerUrl);
 }

 public save(computer: Computer) {
   return this.http.post<Computer>(this.computerUrl, computer);
 }

}
