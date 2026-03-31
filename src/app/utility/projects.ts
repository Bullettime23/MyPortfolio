import { Project } from '../services/project.service';

export const projects: Record<string, Project> = {
  'Simple_arcade': {
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
  },
  'Ball_blast': {
    title: 'Ball blast clone',
    description: 'Small clone of the Ball blast game.',
    images: [
      'assets/png/Ball_blast/Ball_blast_01.png',
      'assets/png/Ball_blast/Ball_blast_02.png',
      'assets/png/Ball_blast/Ball_blast_03.png',
      'assets/png/Ball_blast/Ball_blast_04.png',
    ],
    videos: ['assets/video/Ball Blast Replica Demo.mp4'],
    overview:
      'I made this Ball blast clone with Unity for the course. It has levels system, gold and upgrades shop',
    toolsUsed: ['Unity'],
    githubLink: 'https://github.com/Bullettime23/Ball_blast_clone',
  },
};
