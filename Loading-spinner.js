import { LitElement, html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class LoadingSpinner extends DDD {
  static get tag() { return 'loading-spinner'; }
  
  static get properties() {
    return {
      label: { type: String }
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--ddd-spacing-3);
        padding: var(--ddd-spacing-6);
      }
      
      .spinner {
        width: var(--ddd-spacing-10);
        height: var(--ddd-spacing-10);
        border: var(--ddd-border-lg);
        border-color: rgba(0,0,0,0.1);
        border-top-color: var(--ddd-theme-default-beaverBlue);
        border-radius: var(--ddd-radius-circle);
        animation: spin 1s linear infinite;
      }
      
      .label {
        font-weight: bold;
        color: var(--ddd-theme-default-nittanyNavy);
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `];
  }

  render() {
    return html`
      <div class="spinner"></div>
      <div class="label">${this.label || 'Loading Site Data...'}</div>
    `;
  }
}
customElements.define(LoadingSpinner.tag, LoadingSpinner);