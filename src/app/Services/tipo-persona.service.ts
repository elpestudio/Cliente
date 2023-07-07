import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoPersonaService {

  constructor(private http: HttpClient) { }

  getTipoPersona(){
    const URL ='http://localhost:9091/api/TipoPersona';
    return this.http.get(URL);
  }
}
