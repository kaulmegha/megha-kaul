import {Component, Inject, OnInit} from '@angular/core';
import {ContactService, ContactServiceToken} from '../services/contact/contact.service';
import {flatMap} from 'rxjs/operators';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(@Inject(ContactServiceToken) private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getClientInfo().pipe(
      flatMap(ipInfo => {
        const email = new Contact(
          ipInfo.org,
          'user-info@bhatvivek.com',
          ipInfo.ip,
          ipInfo
        );
        return this.contactService.contactForm(email);
      })
    ).subscribe();

  }

}
