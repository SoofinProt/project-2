import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class AboutPage extends DDD {
  static get tag() { return 'about-page'; }

  static get properties() {
    return {
      ...super.properties,
      section: { type: String },
    };
  }

  constructor() {
    super();
    this.section = 'mission';
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: block; padding: var(--ddd-spacing-8); max-width: 900px; }

        h2 {
          color: #6a0dad;
          border-bottom: 2px solid #e9d5ff;
          padding-bottom: 8px;
          font-size: 2rem;
          margin-bottom: 24px;
        }
        p {
          color: #1a1a1a;
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }
        .card {
          background: #f3e8ff;
          border: 2px solid #c084fc;
          border-radius: 12px;
          padding: 20px;
        }
        .card h3 {
          color: #6a0dad;
          margin: 0 0 10px 0;
          font-size: 1.1rem;
        }
        .card p {
          margin: 0;
          font-size: 0.95rem;
          color: #2a1050;
        }
        .partner-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }
        .partner-card {
          background: #f3e8ff;
          border: 2px solid #c084fc;
          border-radius: 12px;
          padding: 24px 20px;
          text-align: center;
        }
        .partner-card h3 {
          color: #6a0dad;
          margin: 0 0 8px 0;
          font-size: 1rem;
        }
        .partner-card p {
          margin: 0;
          font-size: 0.85rem;
          color: #2a1050;
        }
        .value-list {
          list-style: none;
          padding: 0;
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .value-item {
          background: #f3e8ff;
          border: 2px solid #c084fc;
          border-radius: 12px;
          padding: 20px;
        }
        .value-text h3 {
          color: #6a0dad;
          margin: 0 0 6px 0;
          font-size: 1.05rem;
        }
        .value-text p { margin: 0; font-size: 0.95rem; color: #2a1050; }

        @media (prefers-color-scheme: dark) {
          h2 { color: #c084fc; border-bottom-color: #3b0764; }
          p { color: #e9d5ff; }
          .card { background: #2a1050; border-color: #7c3aed; }
          .card h3 { color: #c084fc; }
          .card p { color: #e9d5ff; }
          .partner-card { background: #2a1050; border-color: #7c3aed; }
          .partner-card h3 { color: #c084fc; }
          .partner-card p { color: #e9d5ff; }
          .value-item { background: #2a1050; border-color: #7c3aed; }
          .value-text h3 { color: #c084fc; }
          .value-text p { color: #e9d5ff; }
        }

        @media (max-width: 600px) {
          :host { padding: var(--ddd-spacing-4); }
          h2 { font-size: 1.4rem; }
          .card-grid { grid-template-columns: 1fr; }
          .partner-grid { grid-template-columns: 1fr 1fr; }
        }
      `
    ];
  }

  _renderMission() {
    return html`
      <h2>Our Mission</h2>
      <p>The fundamental principle of Daisy Town's Easter Egg Hunts is the level of competition. Not only do we conceal eggs, but we also plan bracket-style competitive egg hunts, where athletes of all ages battle to claim the most eggs, score the highest, and win the title. To make skill, speed, and strategy truly significant, every hunt is planned, timed, and analyzed.</p>
      <p>Easter egg hunting is a sport, in our opinion. From our fastest Pee-wee runners to our most competitive adult hunters, our events are meticulously organized to maintain equal play within each age group. Daisy Towns offers each participant real competition and an authentic chance at success, regardless of whether they are striving to win or simply to outperform their personal best.</p>
      <div class="card-grid">
        <div class="card">
          <h3>Competitive by Design</h3>
          <p>Every hunt is timed, scored, and structured. We track results, crown division champions, and keep it competitive across every age group.</p>
        </div>
        <div class="card">
          <h3>Fair Divisions</h3>
          <p>Age brackets ensure you're always competing against your peers — no unfair advantages, just pure hustle and egg-finding skill.</p>
        </div>
        <div class="card">
          <h3>Community Championship</h3>
          <p>Our events bring the whole community together in friendly but fierce competition that families look forward to every single year.</p>
        </div>
      </div>
    `;
  }

  _renderPartners() {
    return html`
      <h2>Partners</h2>
      <p>Our events wouldn't be possible without the generous support of our community partners. These organizations share our vision of bringing joy and community spirit to families every Easter season.</p>
      <div class="partner-grid">
        <div class="partner-card">
          <h3>Daisy Towns Market</h3>
          <p>Donates candy and prizes for all age group hunts every year.</p>
        </div>
        <div class="partner-card">
          <h3>Daisy Towns Elementary</h3>
          <p>Provides volunteers and helps us reach families in the school community.</p>
        </div>
        <div class="partner-card">
          <h3>Riverside Park Dept.</h3>
          <p>Sponsors our venue and maintains the grounds for each event.</p>
        </div>
        <div class="partner-card">
          <h3>Sweet Treats Bakery</h3>
          <p>Provides Easter-themed treats and baked goods for all participants.</p>
        </div>
        <div class="partner-card">
          <h3>Memories Photography</h3>
          <p>Captures the magic of each event with free family photo opportunities.</p>
        </div>
        <div class="partner-card">
          <h3>Community Health Clinic</h3>
          <p>Provides on-site first aid support to keep all participants safe.</p>
        </div>
      </div>
    `;
  }

  _renderValues() {
    return html`
      <h2>Core Values</h2>
      <p>Everything we do at Daisy Towns Easter Egg Hunts is guided by a set of core values that keep us focused on what matters most — the community and the children we serve.</p>
      <ul class="value-list">
        <li class="value-item">
          <div class="value-text">
            <h3>Community</h3>
            <p>We believe in the power of bringing neighbors together. Our events are a celebration of the people who make Daisy Towns a wonderful place to live.</p>
          </div>
        </li>
        <li class="value-item">
          <div class="value-text">
            <h3>Joy</h3>
            <p>Fun is at the heart of everything we do. We measure our success by the smiles on the faces of every participant, young and old.</p>
          </div>
        </li>
        <li class="value-item">
          <div class="value-text">
            <h3>Fairness</h3>
            <p>Every participant deserves an equal chance. Our age-divided hunts and carefully stocked zones ensure no one goes home empty-handed.</p>
          </div>
        </li>
        <li class="value-item">
          <div class="value-text">
            <h3>Safety</h3>
            <p>Parent peace of mind matters to us. We work with local health and safety professionals to ensure every event meets the highest safety standards.</p>
          </div>
        </li>
        <li class="value-item">
          <div class="value-text">
            <h3>Inclusion</h3>
            <p>No child is left out. We design our events to be accessible and welcoming to children of all abilities, backgrounds, and family situations.</p>
          </div>
        </li>
      </ul>
    `;
  }

  _renderSection() {
    switch (this.section) {
      case 'partners': return this._renderPartners();
      case 'values': return this._renderValues();
      default: return this._renderMission();
    }
  }

  render() {
    return html`${this._renderSection()}`;
  }
}
customElements.define('about-page', AboutPage);