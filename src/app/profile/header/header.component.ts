import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class HeaderComponent implements OnInit {
  ids: Array<string> = ['about', 'education', 'skills', 'experience', 'resume'];

  constructor(private location: Location) { }

  ngOnInit() {}

  onClick(id: string) {
    if (id === 'resume') {
      window.open('assets/resume/Resume_Vivek_Bhat.pdf', '_blank');
    } else {
      id = '#' + id;
      const element = document.querySelector(id);
      if (element) {
        this.location.replaceState(id);
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    }
  }
}
