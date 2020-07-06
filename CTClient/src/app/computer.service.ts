import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Computer } from './model/computer';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  private computerUrl: string;

  constructor(private http: HttpClient) {
    this.computerUrl = 'http://localhost:9010/computers';
  }

  public findAll(): Observable<Computer[]>  {
   const url = `${this.computerUrl}/fetchAll`;
   return this.http.get<Computer[]>(url, httpOptions);
 }

 public save(computer: Computer): Observable<Computer> {
   const url = `${this.computerUrl}/save`;
   return this.http.post<Computer>(url, computer, httpOptions);
 }

 public updateData(computer: Computer) {
   const id = computer.id;
   const url = `${this.computerUrl}/update`;
   console.log('Id: ', id);
   return this.http.put<Computer>(url, computer, httpOptions);
 }

 public deleteComputer(id: number) {
  const url = `${this.computerUrl}/delete/${id}`;
  console.log('Id delete: ', id);
  console.log('Url: ', url);
  return this.http.delete<Computer>(url, httpOptions);
 }
}
