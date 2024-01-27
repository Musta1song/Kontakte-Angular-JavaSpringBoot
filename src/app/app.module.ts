import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    HeaderComponent,
    AddContactComponent,

  ],
  imports: [
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
