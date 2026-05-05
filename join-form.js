import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class JoinForm extends DDD {
  static get tag() { return 'join-form'; }

  static get properties() {
    return {
      ...super.properties,
      category: { type: String, reflect: true },
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
        h2 { color: #6a0dad; border-bottom: 2px solid #e9d5ff; padding-bottom: 8px; }
        label { display: block; margin-bottom: var(--ddd-spacing-2); font-family: var(--ddd-font-primary); color: #1a1a1a; font-weight: 500; }
        input, select {
          width: 100%;
          padding: var(--ddd-spacing-2);
          margin-bottom: var(--ddd-spacing-4);
          border: 2px solid #c084fc;
          border-radius: var(--ddd-radius-sm);
          box-sizing: border-box;
          font-size: 1rem;
          outline: none;
          background: white;
          color: #1a1a1a;
        }
        input:focus, select:focus { border-color: #6a0dad; }
        button {
          background: #6a0dad;
          color: white;
          border: none;
          padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
          border-radius: var(--ddd-radius-sm);
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          letter-spacing: 0.5px;
        }
        button:hover { background: #4b0082; }

        @media (prefers-color-scheme: dark) {
          h2 { color: #c084fc; border-bottom-color: #3b0764; }
          label { color: #e9d5ff; }
          input, select { background: #2a1050; color: #e9d5ff; border-color: #7c3aed; }
          input:focus, select:focus { border-color: #c084fc; }
        }

        @media (max-width: 600px) {
          :host { padding: var(--ddd-spacing-4); max-width: 100%; }
        }
      `
    ];
  }

  render() {
    return html`
      <h2>Join the Hunt</h2>
      <label>Name <input type="text" placeholder="Your name"></label>
      <label>Email <input type="email" placeholder="Your email"></label>
      <label>Category
        <select>
          <option value="peewee">Pee-wee</option>
          <option value="7-12">Ages 7-12</option>
          <option value="13-17">Ages 13-17</option>
          <option value="18plus">Adults 18+</option>
        </select>
      </label>
      <button>Register</button>
    `;
  }
}
customElements.define('join-form', JoinForm);