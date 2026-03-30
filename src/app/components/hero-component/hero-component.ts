import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `<section class="home-hero">
    <div class="home-hero__content">
      <h1 class="heading-primary">{{ title() }}</h1>
      <div class="home-hero__info">
        <p class="text-primary">
          {{ paragraph() }}
        </p>
      </div>
      <div class="home-hero__cta">
        <a href="./#projects" class="btn btn--bg">Projects</a>
      </div>
    </div>
    <div class="home-hero__socials">
      <div class="home-hero__social">
        <a href="https://www.linkedin.com/in/lev-medvedev/" class="home-hero__social-icon-link">
          <img src="./assets/png/linkedin-ico.png" alt="icon" class="home-hero__social-icon" />
        </a>
      </div>
      <div class="home-hero__social">
        <a href="https://github.com/Bullettime23/Bullettime23" class="home-hero__social-icon-link">
          <img src="./assets/png/github-ico.png" alt="icon" class="home-hero__social-icon" />
        </a>
      </div>
      <div class="home-hero__social">
        <a href="https://x.com/Lev_Medvedev_" class="home-hero__social-icon-link">
          <img src="./assets/png/twitter-ico.png" alt="icon" class="home-hero__social-icon" />
        </a>
      </div>
      <div class="home-hero__social">
        <a
          href="https://www.instagram.com/peccaturumheavymetal/"
          class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
        >
          <img src="./assets/png/insta-ico.png" alt="icon" class="home-hero__social-icon" />
        </a>
      </div>
    </div>
    <div class="home-hero__mouse-scroll-cont">
      <div class="mouse"></div>
    </div>
  </section>`,
})
export class HeroComponent {
  public title = input<string>("Hi, I'm Lev Medvedev");
  public paragraph = input<string>(`Hello, and welcome to my website! I'm Lev, a game developer!
    I used to work as a web developer, but decided to focus on video game creation, which has
    always fascinated and inspired me!
    `);
}
