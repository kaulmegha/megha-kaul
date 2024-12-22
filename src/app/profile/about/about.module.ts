import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AboutComponent} from './about.component';
import {AboutServiceToken} from '../../services/about/about.service';
import {MockAboutService} from '../../services/about/mock-about.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [
    AboutComponent
  ],
  exports: [AboutComponent],
  providers: [
    {provide: AboutServiceToken, useClass: MockAboutService}
  ]
})
export class AboutModule {
}
