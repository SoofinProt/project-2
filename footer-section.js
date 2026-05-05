import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class FooterSection extends DDD {
  static get tag() { return 'footer-section'; }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background: #6a0dad;
          color: #f3e8ff;
          text-align: center;
          padding: var(--ddd-spacing-6);
          margin-top: auto;
        }
        p {
          margin: 0;
          font-family: var(--ddd-font-primary);
          font-size: 0.9rem;
          letter-spacing: 0.5px;
        }

        @media (prefers-color-scheme: dark) {
          :host { background: #3b0764; color: #e9d5ff; }
        }

        @media (max-width: 600px) {
          :host { padding: var(--ddd-spacing-4); }
          p { font-size: 0.8rem; }
        }
      `
    ];
  }

  render() {
    return html`<footer><p>© 2026 Community Easter Egg Hunt</p></footer>`;
  }
}
customElements.define('footer-section', FooterSection);