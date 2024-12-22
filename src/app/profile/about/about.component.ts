import {Component, Inject, OnInit} from '@angular/core';
import {AboutService, AboutServiceToken} from '../../services/about/about.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about$: Observable<string []>;

  constructor(@Inject(AboutServiceToken) private aboutService: AboutService) { }

  ngOnInit() {
    this.about$ = this.aboutService.getAbout().pipe();
  }

}
