import { Component, OnInit } from '@angular/core';
import { ContactForm } from 'src/app/models/contact-form';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm = new ContactForm();
  contacts: ContactForm[] = [];

  constructor() {}

  ngOnInit(): void {}

  addContact() {
    this.contacts.push(this.contactForm);

    this.contactForm = new ContactForm();
  }
}
