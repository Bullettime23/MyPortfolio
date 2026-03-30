import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: ` <section id="about" class="about sec-pad">
    <div class="main-container">
      <h2 class="heading heading-sec heading-sec__mb-med">
        <span class="heading-sec__main">About Me</span>
        <span class="heading-sec__sub"> Here you can find more info about me and what I do </span>
      </h2>
      <div class="about__content">
        <div class="about__content-main">
          <h3 class="about__content-title">Get to know me!</h3>
          <div class="about__content-details">
            <p class="about__content-details-para">
              Hello! It's
              <strong>Lev Medvedev</strong>
              and I'm a creative <strong> Game Developer </strong> located in Kazakhstan. I used to
              work as a web developer, but decided to focus on video game creation, which has always
              fascinated and inspired me. I decided to start developing with <strong>Unity</strong>,
              as it's the simplest and most versatile game engine for creating 3D games. Having
              completed my courses, I'm continuing to explore various development techniques and
              <strong>3D modeling with Blender</strong>. I'm currently working on my own project as
              an indie developer, but I'm also happy to collaborate on interesting projects! I'm
              also working at my blog where I tell about my experience in development. Feel free to
              <strong>contact</strong> me here via the form below or any of my socials.
            </p>
          </div>
          <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr">Contact</a>
        </div>
        <div class="about__content-skills">
          <h3 class="about__content-title">My Skills</h3>
          <div class="skills">
            <div class="skills__skill">C#</div>
            <div class="skills__skill">Unity 3D</div>
            <div class="skills__skill">Blender</div>
          </div>
        </div>
      </div>
    </div>
  </section>`,
})
export class About {}
