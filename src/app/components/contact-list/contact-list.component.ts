import { Component, OnInit } from '@angular/core';
import { Contact } from '../../contact';
import { DeleteContactService } from '../../services/delete-contact/delete-contact.service';
import { GetService } from 'src/app/services/get-service/get-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts!: Contact[];
  constructor(private getService: GetService, private deleteService: DeleteContactService){}

  ngOnInit(): void {
    this.getService.getContacts().subscribe((data: Contact[]) => {
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
  reload(){
    window.location.reload();
    
    
    }

  deleteContact(id:number) {
    this.deleteService.deleteContact(id).subscribe();
    setTimeout(this.reload,500)
  }
}

