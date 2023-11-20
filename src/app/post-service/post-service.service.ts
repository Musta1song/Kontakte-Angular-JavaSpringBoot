import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../contact';
@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private baseUrl = "http://localhost:8080/api/newContact";


  constructor(private http: HttpClient) { }
  postContact(contact?: Contact): Observable<Object>{
    return this.http.post<Object>(`${this.baseUrl}`,
      contact);
  }
}
 