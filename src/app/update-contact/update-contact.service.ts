
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../contact';
import { ContactListComponent } from '../contact-list/contact-list.component';
@Injectable({
  providedIn: 'root'
})
export class UpdateContactService {
  private baseUrl = "http://localhost:8080/api/contacts";

  constructor(private http: HttpClient) { }

deleteContact(id?: any): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`, id);
}

}
