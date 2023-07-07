import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = "http://localhost:9091/api/persona";

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any>{
    return this.http.get(this.URL);
  }

  setPersona(parametros: any): Observable<any>{
    let header = new HttpHeaders({ 'Content-Type':'application/json; charset=utf-8' });
    const requestOptions = {  headers: header};

    return this.http.post(this.URL+'/store', parametros, requestOptions);
  }

  updatePersona(parametros: any): Observable<any>{
    let header = new HttpHeaders({ 'Content-Type':'application/json; charset=utf-8' });
    const requestOptions = {  headers: header};

    return this.http.put(this.URL+'/'+parametros.id, parametros, requestOptions);
  }

  deletePersona(id: any): Observable<any>{
    let header = new HttpHeaders({ 'Content-Type':'application/json; charset=utf-8' });
    const requestOptions = {  headers: header};

    return this.http.delete(this.URL+'/'+id, requestOptions);
  }
}
