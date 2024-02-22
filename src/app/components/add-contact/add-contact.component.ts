import { Component } from '@angular/core';
import { Contact } from '../../contact';
import { PostService } from 'src/app/services/post-service/post-service.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {

  contact: Contact = new Contact();
  constructor(private postService: PostService) { }

  AddNewContact() {
    if(this.contact!.firstname && this.contact!.phoneNumber){
    console.log(this.contact)
    this.postService.CreateNewContact(this.contact).subscribe();
    setTimeout(this.reload,500)
    }
    else{
      alert("Felder müssen ausgefüllt sein!")
    }
  }
  reload(){
    window.location.reload();
  }
}
