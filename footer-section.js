import { LitElement, html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class FooterSection extends DDD {
  static get tag() { return 'footer-section'; }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: white;
        padding: var(--ddd-spacing-10);
        margin-top: var(--ddd-spacing-12);
      }
      .footer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--ddd-spacing-8);
      }
      h4 { color: var(--ddd-theme-default-accent); margin-bottom: var(--ddd-spacing-4); }
      ul { list-style: none; padding: 0; }
      li { margin-bottom: var(--ddd-spacing-2); font-size: 0.9rem; }
      .copyright {
        margin-top: var(--ddd-spacing-8);
        border-top: 1px solid rgba(255,255,255,0.2);
        padding-top: var(--ddd-spacing-4);
        font-size: 0.8rem;
        text-align: center;
      }
    `];
  }

  render() {
    return html`
      <div class="footer-grid">
        <div>
          <h4>Egg Hunt Association</h4>
          <p>Founded 2026. The galaxy's premier competitive scavenger league.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Sponsorships</li>
            <li>Legal / Privacy</li>
            <li>Safety Guidelines</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Email: HQ@egghunt.assoc</li>
            <li>Phone: 555-EGG-WINS</li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        © 2026 Egg Hunt Association | Built with HAX & DDD
      </div>
    `;
  }
}
customElements.define(FooterSection.tag, FooterSection);