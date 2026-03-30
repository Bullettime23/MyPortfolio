import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  public IsHamMenuOpen = signal(false);


  public toggleHamMenu() {
    this.IsHamMenuOpen.update(open => !open);
  }

  public closeMenu() {
    this.IsHamMenuOpen.set(false);
  }

  public menuLinks: { link: string; title: string; fragment: string }[] = [
    {
      title: 'Home',
      link: './',
      fragment: '',
    },
    {
      title: 'Projects',
      link: './',
      fragment: 'projects',
    },
    {
      title: 'About',
      link: './',
      fragment: 'about',
    },
    { title: 'Contact', link: './', fragment: 'contact' },
  ];
}
