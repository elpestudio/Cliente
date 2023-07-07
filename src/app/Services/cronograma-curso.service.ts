import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CronogramaCursoService {  

  constructor(private http: HttpClient) { }

  getCronogramaCurso(parametros: any): Observable<any>{
    const URL ='https://tutor-tm1i.onrender.com/api/persona';
    // const URL ='https://tutorauth.onrender.com';
    // const URL ='http://localhost:9091/api/persona';
    return this.http.get(URL);
  }
}
