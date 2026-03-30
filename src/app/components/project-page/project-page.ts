import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeaderComponent } from '../header/header';
import { HeroComponent } from '../hero-component/hero-component';
import { Footer } from '../footer/footer';
import { ProjectDetails } from '../project-details/project-details';
import { Project, ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-page',
  imports: [HeaderComponent, HeroComponent, ProjectDetails, Footer],
  templateUrl: './project-page.html',
})
export class ProjectPage {
  public project = signal<Project | null>(null);

  private activatedRoute = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  ngOnInit(): void {
    const projectId = this.activatedRoute.snapshot.paramMap.get('id');

    if (projectId) {
      this.project.set(this.projectService.GetProjectById(projectId));
    }
  }
}
