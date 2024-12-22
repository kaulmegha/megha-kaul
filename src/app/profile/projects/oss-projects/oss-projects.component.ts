import {Component, Inject, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProjectsService, ProjectsServiceToken} from '../../../services/projects/projects.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-oss-projects',
  templateUrl: './oss-projects.component.html',
  styleUrls: ['./oss-projects.component.scss']
})
export class OssProjectsComponent implements OnInit {

  @Input() title = '';
  @Input() technology = '';
  @Input() img: '';
  @Input() readmeLink: string = null;
  @Input() githubLink: string = null;
  closeResult: string;
  readme$: Observable<string>;

  constructor(private modalService: NgbModal,
              @Inject(ProjectsServiceToken) private projectService: ProjectsService) {}

  ngOnInit() {
    this.readme$ = this.projectService.getReadme(this.readmeLink).pipe();
  }

  onClickMore(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    }).result
      .then(result => {
        this.closeResult = `Closed with: ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
