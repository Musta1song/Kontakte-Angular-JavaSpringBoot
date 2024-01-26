import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ApiServiceService } from '../api-service/api-service.service';
import { UpdateContactService } from '../update-contact/update-contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts!: Contact[];
  id!: number;
  constructor(private contactService: ApiServiceService, private deleteService: UpdateContactService){}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((data: Contact[]) => {
      console.log(data);
      this.contacts = data;
      this.sortContactsByFirstname();
    });
  }

  
  sortContactsByFirstname(){
    this.contacts.sort((a, b) => {const nameA = a.firstname!.toUpperCase(); // ignore upper and lowercase
    const nameB = b.firstname!.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });}

  deleteContact(ID:number) {
    this.deleteService.deleteContact(ID).subscribe();
    window.location.reload();
  }
}
