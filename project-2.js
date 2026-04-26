import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

// Import all 10 components
import "./navbar-page.js";
import "./footer-section.js";
import "./calendar-page.js";
import "./egg-item.js";
import "./footer-section.js";
import "./registration-form.js";
import "./hunt-details.js";
import "./map-view.js";
import "./about-page.js";
import "./loading-spinner.js";
// Using a simple-cta from the web as the 10th or your own custom one
import "@haxtheweb/simple-cta/simple-cta.js"; 

export class Project2 extends DDD {
  static get tag() { return 'project-2'; }

  static get properties() {
    return {
      activePage: { type: String, reflect: true },
      loading: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.activePage = 'home';
    this.loading = false;
    
    // Listen for back/forward browser buttons
    window.addEventListener('popstate', () => this._updateRoute());
  }

  connectedCallback() {
    super.connectedCallback();
    this._updateRoute();
  }

  // Logic to parse the URL and set the active view
  _updateRoute() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page') || 'home';
    
    // Simulate a brief loading state for the "performant" feel
    this.loading = true;
    this.activePage = page;
    
    setTimeout(() => {
      this.loading = false;
    }, 300);
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          min-height: 100vh;
          background-color: var(--ddd-theme-default-limestoneMaxLight);
          font-family: var(--ddd-font-primary);
        }

        .content-area {
          margin: 0 auto;
          max-width: 1200px;
          padding: var(--ddd-spacing-8) var(--ddd-spacing-4);
          min-height: 60vh;
        }

        /* Transition animations */
        .fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-section {
          text-align: center;
          padding: var(--ddd-spacing-12) 0;
          background: linear-gradient(180deg, var(--ddd-theme-default-limestoneLight), transparent);
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--ddd-spacing-6);
          margin-top: var(--ddd-spacing-8);
        }
      `
    ];
  }

  _renderPage() {
    switch (this.page) {
      case 'mission':
      case 'partners':
      case 'values':
        return html`<about-page .section=${this.page}></about-page>`;
      case 'registration/peewee':
      case 'registration/7-12':
      case 'registration/13-17':
      case 'registration/18plus':
        return html`<registration-form .category=${this.page.split('/')[1]}></registration-form>`;
      case 'directory':
      case 'reach-out':
      case 'socials':
        return html`<contact-page .section=${this.page}></contact-page>`;
      default:
        return html`<calendar-page></calendar-page>`;
    }
  }

  render() {
    return html`
      <navbar-page></navbar-page>

      <main class="content-area ${this.loading ? '' : 'fade-in'}">
        ${this.loading ? html`<loading-spinner></loading-spinner>` : this._renderActivePage()}
      </main>

      <footer-section></footer-section>
    `;
  }

  // Routing Switchboard
  _renderActivePage() {
    switch (this.activePage) {
      case 'home':
        return html`
          <section class="hero-section">
            <h1>The Great 2026 Egg Hunt</h1>
            <p>Welcome to the official portal of the Galactic Egg Retrieval Association.</p>
            <simple-cta title="Join the League" link="?page=registration"></simple-cta>
          </section>

          <div class="grid-layout">
            <egg-item title="Golden Raptor" rarity="legendary" description="Found only in the Outer Rim." icon="✨"></egg-item>
            <egg-item title="Iron Shell" rarity="common" description="Standard training egg for Pee-wees." icon="⚙️"></egg-item>
            <egg-item title="Nebula Core" rarity="rare" description="Glows with the light of a dying star." icon="🌌"></egg-item>
          </div>
        `;

      case 'calendar':
        return html`
          <calendar-page></calendar-page>
          <hunt-details 
            event-name="The Moon-Base Scramble" 
            date="April 20, 2026" 
            time="18:00 UTC" 
            prize="50,000 Credits" 
            restrictions="Oxygen Tank Required">
          </hunt-details>
        `;

      case 'registration':
        return html`
          <div style="text-align: center; margin-bottom: 2rem;">
            <h2>Register for the 2026 Season</h2>
            <p>Fill out the credentials below to receive your Hunter ID.</p>
          </div>
          <registration-form></registration-form>
          <map-view location-name="Association Headquarters" address="123 Crater Lane, Luna City"></map-view>
        `;

      case 'about':
        return html`
          <about-page page-title="Our Cosmic Mission" tagline="Integrity in Retrieval Since 2026">
            <p>The Egg Hunt Association was founded by retired space explorers who wanted to bring competitive sport to the new colonies. Today, we manage over 400 sanctioned hunts across the solar system.</p>
            <p>Our core values are Safety, Tenacity, and Shell-Integrity.</p>
            
            <div slot="sidebar-items"><strong>President:</strong> Commander Shell</div>
            <div slot="sidebar-items"><strong>Active Sectors:</strong> 14</div>
            <div slot="sidebar-items"><strong>Safety Rating:</strong> 99.8%</div>
          </about-page>
        `;

      default:
        return html`<h2>404 - Sector Not Found</h2><a href="?page=home">Return to Earth</a>`;
    }
  }
}

customElements.define(Project2.tag, Project2);