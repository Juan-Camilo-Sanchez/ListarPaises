import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  paisesUrl = "http://localhost:8080/paises?"

  constructor(private httpClient: HttpClient) { }

  public paises(page: number, size: number, order: string, asc: boolean): Observable<any> {



    return this.httpClient.get<any>(this.paisesUrl + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }
}
