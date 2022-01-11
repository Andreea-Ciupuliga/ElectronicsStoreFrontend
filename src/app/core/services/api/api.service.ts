import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService { //ApiService e ca un generic repository pe care o sa il injectam in celelalte services
  private readonly serverUrl = environment.serverUrl;

  //avem nevoie de HttpClient pentru a face requesturi. HttpClient este un serviciu care se injecteaza in contructor
  constructor(private readonly httpClient: HttpClient) {
  }

  //fiecare request din asta intoarce ceva ce se numeste observable
  get<T>(path: string, params = {}): Observable<any> {
    return this.httpClient.get<T>(`${this.serverUrl}${path}`, {params})
  }

  put<T>(path: string, body = {}): Observable<any> {
    return this.httpClient.put<T>(`${this.serverUrl}${path}`, body)
  }

  post<T>(path: string, body = {}): Observable<any> {
    return this.httpClient.post<T>(`${this.serverUrl}${path}`, body)
  }

  delete<T>(path: string): Observable<any> {
    return this.httpClient.delete<T>(`${this.serverUrl}${path}`)
  }
}
