
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeleteContactService {
  private baseUrl = "http://localhost:8080/api/contacts";

  constructor(private http: HttpClient) { }

deleteContact(id?: any): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`, id);
}

}
