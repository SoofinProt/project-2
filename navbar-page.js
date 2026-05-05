import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class NavbarPage extends DDD {
  static get tag() { return 'navbar-page'; }

  static get properties() {
    return {
      ...super.properties,
      navigate: { type: Function },
      aboutOpen: { type: Boolean },
      joinOpen: { type: Boolean },
      contactOpen: { type: Boolean },
      menuOpen: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.aboutOpen = false;
    this.joinOpen = false;
    this.contactOpen = false;
    this.menuOpen = false;
    this.navigate = () => {};
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: #6a0dad;
          padding: var(--ddd-spacing-4) var(--ddd-spacing-10);
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
        }
        .logo {
          height: 80px;
          width: auto;
          border-radius: 8px;
          background: white;
          padding: 4px;
        }
        .site-name {
          color: #ffffff;
          font-family: var(--ddd-font-primary);
          font-size: 1.5rem;
          font-weight: bold;
          letter-spacing: 0.5px;
          line-height: 1.2;
        }
        .nav-links {
          display: flex;
          gap: 25px;
          align-items: center;
        }
        .nav-links button, .dropdown-btn {
          background: none;
          border: none;
          color: #ffffff;
          font-family: var(--ddd-font-primary);
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          padding: 0;
          letter-spacing: 0.5px;
        }
        .nav-links button:hover, .dropdown-btn:hover { color: #f9d4f0; }
        .dropdown { position: relative; display: inline-block; }
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #4b0082;
          min-width: 180px;
          z-index: 100;
          border-radius: 8px;
          margin-top: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          overflow: hidden;
        }
        .dropdown-content.open { display: block; }
        .dropdown-content button {
          color: #ffffff;
          padding: 12px 16px;
          display: block;
          font-size: 0.95rem;
          border-bottom: 1px solid #6a0dad;
          border-left: none;
          border-right: none;
          border-top: none;
          width: 100%;
          text-align: left;
          font-weight: normal;
          background: none;
          cursor: pointer;
        }
        .dropdown-content button:hover { background-color: #6a0dad; color: #f9d4f0; }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 26px;
          height: 3px;
          background: white;
          border-radius: 2px;
        }

        @media (prefers-color-scheme: dark) {
          :host { background-color: #3b0764; }
          .dropdown-content { background-color: #2d0052; }
          .dropdown-content button { border-bottom-color: #4b0082; }
          .dropdown-content button:hover { background-color: #4b0082; }
        }

        @media (max-width: 600px) {
          :host { padding: var(--ddd-spacing-3) var(--ddd-spacing-4); }
          .logo { height: 50px; }
          .site-name { font-size: 1rem; }
          .hamburger { display: flex; }
          .nav-links {
            display: none;
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: #4b0082;
            z-index: 200;
            padding: 8px 0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          }
          .nav-links.open { display: flex; }
          .dropdown { width: 100%; }
          .dropdown-btn {
            display: block;
            width: 100%;
            padding: 12px 20px;
            font-size: 1rem;
            text-align: left;
          }
          .dropdown-content {
            position: static;
            border-radius: 0;
            margin-top: 0;
            box-shadow: none;
            background-color: #3b0064;
          }
          .dropdown-content button { padding-left: 36px; }
        }
      `
    ];
  }

  _closeAll() {
    this.aboutOpen = false;
    this.joinOpen = false;
    this.contactOpen = false;
  }

  _toggle(menu) {
    const current = this[menu + 'Open'];
    this._closeAll();
    this[menu + 'Open'] = !current;
  }

  _go(slug) {
    this._closeAll();
    this.menuOpen = false;
    this.navigate(slug);
  }

  render() {
    return html`
      <nav>
        <div class="brand" @click=${() => this._go('home')}>
          <img class="logo" src="https://easydrawingguides.com/wp-content/uploads/2021/12/how-to-draw-a-cartoon-egg-featured-image-1200.png" alt="Egg Hunt Logo">
          <span class="site-name">Daisy Towns<br>Easter Egg Hunts</span>
        </div>

        <button class="hamburger" @click=${() => { this.menuOpen = !this.menuOpen; this._closeAll(); }}>
          <span></span><span></span><span></span>
        </button>

        <div class="nav-links ${this.menuOpen ? 'open' : ''}">
          <div class="dropdown">
            <span class="dropdown-btn" @click=${() => this._toggle('about')}>About ▾</span>
            <div class="dropdown-content ${this.aboutOpen ? 'open' : ''}">
              <button @click=${() => this._go('mission')}>Our Mission</button>
              <button @click=${() => this._go('partners')}>Partners</button>
              <button @click=${() => this._go('values')}>Core Values</button>
            </div>
          </div>
          <div class="dropdown">
            <span class="dropdown-btn" @click=${() => this._toggle('join')}>Join ▾</span>
            <div class="dropdown-content ${this.joinOpen ? 'open' : ''}">
              <button @click=${() => this._go('registration/peewee')}>Pee-wee</button>
              <button @click=${() => this._go('registration/7-12')}>Ages 7-12</button>
              <button @click=${() => this._go('registration/13-17')}>Ages 13-17</button>
              <button @click=${() => this._go('registration/18plus')}>Adults 18+</button>
            </div>
          </div>
          <div class="dropdown">
            <span class="dropdown-btn" @click=${() => this._toggle('contact')}>Contact ▾</span>
            <div class="dropdown-content ${this.contactOpen ? 'open' : ''}">
              <button @click=${() => this._go('directory')}>Staff Directory</button>
              <button @click=${() => this._go('reach-out')}>Reach Out</button>
              <button @click=${() => this._go('socials')}>Social Media</button>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define(NavbarPage.tag, NavbarPage);