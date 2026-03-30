import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { HeroComponent } from '../hero-component/hero-component';
import { ProjectsComponent } from '../projects-component/projects-component';
import { About } from '../about/about';
import { Footer } from '../footer/footer';
import { Contacts } from '../contacts/contacts';

@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, HeroComponent, ProjectsComponent, About, Contacts, Footer],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
