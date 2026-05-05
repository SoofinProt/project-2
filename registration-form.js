import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class RegistrationForm extends DDD {
  static get tag() { return 'registration-form'; }

  static get properties() {
    return {
      ...super.properties,
      category: { type: String },
    };
  }

  constructor() {
    super();
    this.category = '';
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: block; padding: var(--ddd-spacing-8); max-width: 500px; }
        h2 {
          color: #6a0dad;
          border-bottom: 2px solid #e9d5ff;
          padding-bottom: 8px;
          font-size: 1.8rem;
          margin-bottom: 24px;
        }
        .category-badge {
          display: inline-block;
          background: #e9d5ff;
          color: #4b0082;
          font-weight: bold;
          font-size: 0.85rem;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 24px;
          border: 1px solid #c084fc;
        }
        label {
          display: block;
          margin-bottom: 6px;
          font-family: var(--ddd-font-primary);
          color: #1a1a1a;
          font-weight: 500;
        }
        input {
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
        }
        input:focus { border-color: #6a0dad; }
        button {
          background: #6a0dad;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          letter-spacing: 0.5px;
          margin-top: 4px;
        }
        button:hover { background: #4b0082; }

        @media (prefers-color-scheme: dark) {
          h2 { color: #c084fc; border-bottom-color: #3b0764; }
          .category-badge { background: #2a1050; color: #c084fc; border-color: #7c3aed; }
          label { color: #e9d5ff; }
          input { background: #2a1050; color: #e9d5ff; border-color: #7c3aed; }
          input:focus { border-color: #c084fc; }
        }

        @media (max-width: 600px) {
          :host { padding: var(--ddd-spacing-4); max-width: 100%; }
          h2 { font-size: 1.4rem; }
        }
      `
    ];
  }

  _categoryLabel() {
    switch (this.category) {
      case 'peewee': return 'Pee-wee';
      case '7-12': return 'Ages 7-12';
      case '13-17': return 'Ages 13-17';
      case '18plus': return 'Adults 18+';
      default: return 'All Ages';
    }
  }

  render() {
    return html`
      <h2>Register — ${this._categoryLabel()}</h2>
      <div class="category-badge">🥚 ${this._categoryLabel()} Division</div>
      <label>Name <input type="text" placeholder="Your full name"></label>
      <label>Email <input type="email" placeholder="Your email address"></label>
      <label>Phone <input type="tel" placeholder="Your phone number"></label>
      <button>Register</button>
    `;
  }
}
customElements.define('registration-form', RegistrationForm);