import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-projects',
  template: ` <section id="projects" class="projects sec-pad">
    <div class="main-container">
      <h2 class="heading heading-sec heading-sec__mb-bg">
        <span class="heading-sec__main">Projects</span>
        <span class="heading-sec__sub"> Here you can see some of my projects: </span>
      </h2>

      <div class="projects__content">
        <div class="projects__row">
          <div class="projects__row-img-cont">
            <img
              src="./assets/png/Simple_arcade/img1.png"
              alt="Simple Arcade"
              class="projects__row-img"
              loading="lazy"
            />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title">Simple arcade</h3>
            <p class="projects__row-content-desc">
              A simple arcade as a learn project made with Unity. In this game you need to find the
              keys and avoid traps to reach the final castle and open the gates.
            </p>
            <a routerLink="project/arcade" class="btn btn--med btn--theme dynamicBgClr"
              >Project details</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>`,
  imports: [RouterLink],
})
export class ProjectsComponent {}
