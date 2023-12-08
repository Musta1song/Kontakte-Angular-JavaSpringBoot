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


 
  MakeButtonsVisibleOnRadioEvent(event: any) {
    this.id=event.target.value;
    console.log(this.id)

    document.getElementById("updateContact")!.style.visibility = "visible";
  }


  deleteContact() {
    this.deleteService.deleteContact(this.id).subscribe();
    this.reloadContacts();
  }
   reloadContacts(){
    window.location.reload();
  }
}
