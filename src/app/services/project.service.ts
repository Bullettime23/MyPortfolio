import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  images: string[];
  videos: string[];
  overview: string;
  toolsUsed: string[];
  githubLink: string; 
}

const arcadeProject: Project = {
  title: 'Simple arcade',
  description:
    'A simple arcade as a learn project made with Unity. In this game you need to find the keys and avoid traps to reach the final castle and open its gates.',
  images: [
    'assets/png/Simple_arcade/img1.png',
    'assets/png/Simple_arcade/img2.png',
    'assets/png/Simple_arcade/img3.png',
  ],
  videos: [],
  overview:
    'A simple arcade as a learn project made with Unity. In this 3D game you need to find the keys and avoid traps to reach the final castle and open its gates. In this project, I learned how to create an interface and a pause menu, use scripts with game objects, and use colliders as triggers. I add simple animation for things like moving platforms, accelerators, jump springs, and doors.',
  toolsUsed: ['Unity 3D'],
  githubLink: 'https://github.com/Bullettime23/Simple-Arcade/tree/main',
};

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  public GetProjectById(id: string) {
    return arcadeProject;
  }
}
