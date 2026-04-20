import { LitElement, html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class NavbarPage extends DDD {
  static get tag() { return 'navbar-page'; }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: #d3d3d3; 
          padding: var(--ddd-spacing-4) var(--ddd-spacing-10);
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo { height: 80px; width: auto; }
        .nav-links { display: flex; gap: 25px; align-items: center; }
        
        .nav-links a, .dropdown-btn {
          text-decoration: none;
          color: black;
          font-family: var(--ddd-font-primary);
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
        }

        .dropdown { position: relative; display: inline-block; }
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #666;
          min-width: 180px;
          z-index: 100;
          border-radius: 4px;
          margin-top: 8px;
        }
        .dropdown:hover .dropdown-content { display: block; }
        .dropdown-content a {
          color: white;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          font-size: 0.9rem;
          border-bottom: 1px solid #777;
        }
        .dropdown-content a:hover { background-color: #444; }
      `
    ];
  }

  render() {
    return html`
      <nav>
        <img class="logo" src="https://easydrawingguides.com/wp-content/uploads/2021/12/how-to-draw-a-cartoon-egg-featured-image-1200.png" alt="Egg Hunt Logo">
        <div class="nav-links">
          <a href="#">About</a>
          <div class="dropdown">
            <span class="dropdown-btn">Join</span>
            <div class="dropdown-content">
              <a href="#">Pee-wee</a>
              <a href="#">Ages 7-12</a>
              <a href="#">Ages 13-17</a>
              <a href="#">Adults 18+</a>
            </div>
          </div>
          <a href="#">Contact</a>
        </div>
      </nav>
    `;
  }
}
customElements.define(NavbarPage.tag, NavbarPage);