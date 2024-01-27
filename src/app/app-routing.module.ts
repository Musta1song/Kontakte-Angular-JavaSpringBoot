import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent
  },
  {
    path: 'addcontact',
    component: AddContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
