import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from '../model/computer';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  private computerUrl: string;

  constructor(private http: HttpClient) {
    this.computerUrl = 'http://localhost:8080/computers';
  }

  public findAll(): Observable<Computer[]>  {
   return this.http.get<Computer[]>(this.computerUrl, httpOptions);
 }

 public save(computer: Computer) {
   return this.http.post<Computer>(this.computerUrl, computer, httpOptions);
 }

 public updateData(id: number, computer: Computer) {
   const url = `${this.computerUrl}/${id}`;
   return this.http.put<Computer>(url, computer, httpOptions);
 }

 public deleteComputer(id: number, computer: Computer) {
  const url = `${this.computerUrl}/${id}`;
  return this.http.delete<Computer>(url, httpOptions);
 }

}
