import { LitElement, html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class NavbarPage extends DDD {
  static get tag() { return 'navbar-page'; }

  static get properties() {
    return {
      menuItems: { type: Array },
    };
  }

  constructor() {
    super();
    this.menuItems = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchMenu();
  }

  async fetchMenu() {
    const res = await fetch('/api/menu.json');
    const data = await res.json();
    this.menuItems = data.items;
  }

  _changeRoute(e, slug) {
    e.preventDefault();
    window.history.pushState({}, '', `?page=${slug}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-limestoneGray);
        padding: var(--ddd-spacing-4) var(--ddd-spacing-8);
        border-bottom: var(--ddd-border-md);
      }
      nav { display: flex; justify-content: space-between; align-items: center; }
      .logo { height: 60px; cursor: pointer; }
      .nav-links { display: flex; gap: var(--ddd-spacing-6); }
      a {
        text-decoration: none;
        color: var(--ddd-theme-default-nittanyNavy);
        font-weight: var(--ddd-font-weight-bold);
        font-family: var(--ddd-font-primary);
        font-size: 1.1rem;
      }
      a:hover { color: var(--ddd-theme-default-beaverBlue); }
    `];
  }

  render() {
    return html`
      <nav>
        <img class="logo" src="your-logo.png" @click="${(e) => this._changeRoute(e, 'home')}">
        <div class="nav-links">
          ${this.menuItems.map(item => html`
            <a href="?page=${item.slug}" @click="${(e) => this._changeRoute(e, item.slug)}">${item.title}</a>
          `)}
        </div>
      </nav>
    `;
  }
}
customElements.define(NavbarPage.tag, NavbarPage);