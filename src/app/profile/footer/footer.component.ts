import {Component, Inject, OnInit} from '@angular/core';
import {BuildInformation, BuildInformationToken} from '../../services/build-information';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(@Inject(BuildInformationToken) public buildInformation: BuildInformation) { }

  ngOnInit() {
  }

}
