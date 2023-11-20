import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service/api-service.service';
import { Contact } from '../contact';
import { PostServiceService } from '../post-service/post-service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {

  contact: Contact = new Contact();
  constructor(private postService: PostServiceService) { }

  submit() {

    console.log(this.contact)

    this.postService.postContact(this.contact).subscribe();
  }
}
