import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitucionService {

  URL = 'http://localhost:9091/api/institucion';

  constructor(private http: HttpClient ) { }

  getInstituciones(): Observable<any>{
    return this.http.get(this.URL);
  }

  setInstitucion(parametros: any): Observable<any>{
    let header = new HttpHeaders({ 'Content-Type':'application/json; charset=utf-8' });
    const requestOptions = {  headers: header};

    return this.http.post(this.URL+'/store', parametros, requestOptions);
  }

  updateInstitucion(parametros: any): Observable<any>{
    let header = new HttpHeaders({ 'Content-Type':'application/json; charset=utf-8' });
    const requestOptions = {  headers: header};

    return this.http.put(this.URL+'/'+parametros.id, parametros, requestOptions);
  }

  deleteInstitucion(id: any): Observable<any>{
    let header = new HttpHeaders({ 'Content-Type':'application/json; charset=utf-8' });
    const requestOptions = {  headers: header};

    return this.http.delete(this.URL+'/'+id, requestOptions);
  }
}
