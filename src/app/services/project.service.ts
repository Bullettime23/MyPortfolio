import { Injectable } from '@angular/core';
import { projects } from '../utility/projects';

export interface Project {
  title: string;
  description: string;
  images: string[];
  videos: string[];
  overview: string;
  toolsUsed: string[];
  githubLink: string; 
}


@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public GetProjectById(id: string): Project | null {
    return projects[id] ?? null;
  }
}
