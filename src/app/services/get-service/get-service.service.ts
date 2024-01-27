
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/contact';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  private baseUrl = "http://localhost:8080/api/contacts";


  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this.baseUrl}`);
    
  }
}
 