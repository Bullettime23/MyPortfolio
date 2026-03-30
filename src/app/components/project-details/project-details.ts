import { Component, input } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { Project } from '../../services/project.service';

@Component({
  selector: 'app-project-details',
  imports: [GalleriaModule],
  templateUrl: './project-details.html',
})
export class ProjectDetails {
  public project = input<Project>();
}
