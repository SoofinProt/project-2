import { LitElement, html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class RegistrationForm extends DDD {
  static get tag() { return 'registration-form'; }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        max-width: 600px;
        margin: 0 auto;
        padding: var(--ddd-spacing-6);
        background: white;
        border-radius: var(--ddd-radius-lg);
        box-shadow: var(--ddd-boxShadow-sm);
      }
      .form-group { margin-bottom: var(--ddd-spacing-4); }
      label { display: block; font-weight: bold; margin-bottom: var(--ddd-spacing-1); }
      input, select {
        width: 100%;
        padding: var(--ddd-spacing-2);
        border: 1px solid #ccc;
        border-radius: var(--ddd-radius-xs);
      }
      button {
        background: var(--ddd-theme-default-nittanyNavy);
        color: white;
        border: none;
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        border-radius: var(--ddd-radius-sm);
        cursor: pointer;
        font-weight: bold;
      }
      button:hover { background: var(--ddd-theme-default-beaverBlue); }
    `];
  }

  _submit(e) {
    e.preventDefault();
    alert("Application Received! Good luck in the 2026 Season.");
  }

  render() {
    return html`
      <form @submit="${this._submit}">
        <div class="form-group">
          <label>Hunter Name</label>
          <input type="text" placeholder="e.g. Master Cracker" required>
        </div>
        <div class="form-group">
          <label>Division</label>
          <select>
            <option>Pee-wee (Under 7)</option>
            <option>Junior (7-12)</option>
            <option>Elite (13-17)</option>
            <option>Adult Pro (18+)</option>
          </select>
        </div>
        <button type="submit">Join the League</button>
      </form>
    `;
  }
}
customElements.define(RegistrationForm.tag, RegistrationForm);