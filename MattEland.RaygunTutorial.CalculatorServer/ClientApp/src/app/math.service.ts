import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  add(x: string, y: string): Promise<string> {
    return this.http.get<string>(`${this.baseUrl}calculator/add/${x}/${y}`).toPromise();
  }

  subtract(x: string, y: string): Promise<string> {
    return this.http.get<string>(`${this.baseUrl}calculator/subtract/${x}/${y}`).toPromise();
  }

  multiply(x: string, y: string): Promise<string> {
    return this.http.get<string>(`${this.baseUrl}calculator/multiply/${x}/${y}`).toPromise();
  }

  divide(x: string, y: string): Promise<string> {
    return this.http.get<string>(`${this.baseUrl}calculator/divide/${x}/${y}`).toPromise();
  }

  power(x: string, y: string): Promise<string> {
    return this.http.get<string>(`${this.baseUrl}calculator/power/${x}/${y}`).toPromise();
  }
}
