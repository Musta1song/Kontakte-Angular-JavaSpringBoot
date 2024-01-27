import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/contact';
@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = "http://localhost:8080/api/newContact";


  constructor(private http: HttpClient) { }
  CreateNewContact(contact: Contact): Observable<Object>{
    {
    return this.http.post<Object>(`${this.baseUrl}`,
      contact);
    }
  
  }
}
 