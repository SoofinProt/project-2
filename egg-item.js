import { LitElement, html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class EggItem extends DDD {
  static get tag() { return 'egg-item'; }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      rarity: { type: String }, // "common", "rare", "legendary"
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        border: var(--ddd-border-sm);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-4);
        background: white;
        transition: transform 0.2s ease;
        text-align: center;
      }
      :host(:hover) {
        transform: translateY(-5px);
        box-shadow: var(--ddd-boxShadow-md);
      }
      .icon { font-size: 3rem; margin-bottom: var(--ddd-spacing-2); }
      h3 { margin: 0; font-family: var(--ddd-font-primary); }
      .rarity {
        text-transform: uppercase;
        font-size: 0.7rem;
        font-weight: bold;
        letter-spacing: 1px;
        color: var(--ddd-theme-default-coalyGray);
      }
    `];
  }

  render() {
    return html`
      <div class="icon">${this.icon || '🥚'}</div>
      <div class="rarity">${this.rarity}</div>
      <h3>${this.title}</h3>
      <p>${this.description}</p>
    `;
  }
}
customElements.define(EggItem.tag, EggItem);