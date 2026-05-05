import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class ContactPage extends DDD {
  static get tag() { return 'contact-page'; }

  static get properties() {
    return {
      ...super.properties,
      section: { type: String },
    };
  }

  constructor() {
    super();
    this.section = 'directory';
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
        p { color: #1a1a1a; font-size: 1rem; line-height: 1.8; margin-bottom: 16px; }

        .staff-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }
        .staff-card {
          background: #f3e8ff;
          border: 2px solid #c084fc;
          border-radius: 12px;
          padding: 24px 20px;
          text-align: center;
        }
        .staff-card h3 { color: #6a0dad; margin: 0 0 4px 0; font-size: 1.1rem; }
        .staff-card .role { color: #7c3aed; font-size: 0.85rem; font-weight: bold; margin-bottom: 8px; }
        .staff-card .email { color: #4b0082; font-size: 0.85rem; }

        .reach-form label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: #1a1a1a;
          font-family: var(--ddd-font-primary);
        }
        .reach-form input,
        .reach-form textarea {
          width: 100%;
          padding: 10px 12px;
          margin-bottom: 18px;
          border: 2px solid #c084fc;
          border-radius: 8px;
          box-sizing: border-box;
          font-size: 1rem;
          outline: none;
          background: white;
          color: #1a1a1a;
          font-family: var(--ddd-font-primary);
        }
        .reach-form input:focus,
        .reach-form textarea:focus { border-color: #6a0dad; }
        .reach-form textarea { min-height: 140px; resize: vertical; }
        .reach-form button {
          background: #6a0dad;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          letter-spacing: 0.5px;
        }
        .reach-form button:hover { background: #4b0082; }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
          margin-top: 24px;
        }
        .social-card {
          background: #f3e8ff;
          border: 2px solid #c084fc;
          border-radius: 12px;
          padding: 24px 20px;
          text-align: center;
          cursor: pointer;
          transition: transform 0.15s, background 0.15s;
          text-decoration: none;
          display: block;
        }
        .social-card:hover { transform: translateY(-4px); background: #e9d5ff; }
        .social-logo {
          width: 48px;
          height: 48px;
          object-fit: contain;
          margin-bottom: 12px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        .social-card h3 { color: #6a0dad; margin: 0 0 6px 0; font-size: 1rem; }
        .social-card p { margin: 0; font-size: 0.85rem; color: #4b0082; }

        @media (prefers-color-scheme: dark) {
          h2 { color: #c084fc; border-bottom-color: #3b0764; }
          p { color: #e9d5ff; }
          .staff-card { background: #2a1050; border-color: #7c3aed; }
          .staff-card h3 { color: #c084fc; }
          .staff-card .role { color: #c084fc; }
          .staff-card .email { color: #e9d5ff; }
          .reach-form label { color: #e9d5ff; }
          .reach-form input, .reach-form textarea { background: #2a1050; color: #e9d5ff; border-color: #7c3aed; }
          .reach-form input:focus, .reach-form textarea:focus { border-color: #c084fc; }
          .social-card { background: #2a1050; border-color: #7c3aed; }
          .social-card:hover { background: #3b0764; }
          .social-card h3 { color: #c084fc; }
          .social-card p { color: #e9d5ff; }
        }

        @media (max-width: 600px) {
          :host { padding: var(--ddd-spacing-4); }
          h2 { font-size: 1.4rem; }
          .staff-grid { grid-template-columns: 1fr; }
          .social-grid { grid-template-columns: 1fr 1fr; }
        }
      `
    ];
  }

  _renderDirectory() {
    return html`
      <h2>Staff Directory</h2>
      <p>Meet the dedicated team behind Daisy Towns Easter Egg Hunts. Our staff works year-round to plan and deliver the best possible experience for every family.</p>
      <div class="staff-grid">
        <div class="staff-card">
          <h3>Travis Gamboa</h3>
          <div class="role">Professional Egg Hunt Coach</div>
          <div class="email">tsg5313@psu.edu</div>
        </div>
        <div class="staff-card">
          <h3>Sophia Pratte</h3>
          <div class="role">Professional Egg Hider</div>
          <div class="email">sap6295@psu.edu</div>
        </div>
      </div>
    `;
  }

  _renderReachOut() {
    return html`
      <h2>Reach Out</h2>
      <p>Have a question, suggestion, or want to get involved? We'd love to hear from you. Fill out the form below and our team will get back to you within 2 business days.</p>
      <div class="reach-form">
        <label>Name <input type="text" placeholder="Your full name"></label>
        <label>Email <input type="email" placeholder="Your email address"></label>
        <label>Subject <input type="text" placeholder="What is this about?"></label>
        <label>Message <textarea placeholder="Tell us what's on your mind..."></textarea></label>
        <button>Send Message</button>
      </div>
    `;
  }

  _renderSocials() {
    return html`
      <h2>Social Media</h2>
      <p>Follow us on social media to stay up to date with event announcements, behind-the-scenes content, winner photos, and community highlights. We love seeing your egg hunt memories!</p>
      <div class="social-grid">
        <div class="social-card">
          <img class="social-logo" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook">
          <h3>Facebook</h3>
          <p>@DaisyTownsEggHunt</p>
        </div>
        <div class="social-card">
          <img class="social-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram">
          <h3>Instagram</h3>
          <p>@daisytownseggs</p>
        </div>
        <div class="social-card">
          <img class="social-logo" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="X / Twitter">
          <h3>Twitter / X</h3>
          <p>@DaisyEggHunt</p>
        </div>
        <div class="social-card">
          <img class="social-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube">
          <h3>YouTube</h3>
          <p>Daisy Towns Events</p>
        </div>
      </div>
    `;
  }

  _renderSection() {
    switch (this.section) {
      case 'reach-out': return this._renderReachOut();
      case 'socials': return this._renderSocials();
      default: return this._renderDirectory();
    }
  }

  render() {
    return html`${this._renderSection()}`;
  }
}
customElements.define('contact-page', ContactPage);