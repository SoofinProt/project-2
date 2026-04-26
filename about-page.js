import { LitElement, html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class AboutPage extends DDD {
  static get tag() { return 'about-page'; }

  static get properties() {
    return {
      pageTitle: { type: String, attribute: "page-title" },
      tagline: { type: String }
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        padding: var(--ddd-spacing-8);
      }
      .page-header {
        text-align: center;
        margin-bottom: var(--ddd-spacing-12);
        border-bottom: var(--ddd-border-md);
        padding-bottom: var(--ddd-spacing-6);
      }
      h1 { margin: 0; color: var(--ddd-theme-default-nittanyNavy); }
      .tagline { font-size: 1.2rem; color: #555; font-weight: normal; }
      
      .story-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: var(--ddd-spacing-10);
      }
      
      ::slotted(*) {
        font-family: var(--ddd-font-primary);
        line-height: var(--ddd-lh-base);
        margin-bottom: var(--ddd-spacing-4);
      }
      
      .sidebar {
        background-color: var(--ddd-theme-default-limestoneLight);
        padding: var(--ddd-spacing-6);
        border-radius: var(--ddd-radius-sm);
        height: fit-content;
      }
      
      ::slotted([slot="sidebar-items"]) {
        margin-bottom: var(--ddd-spacing-2);
        padding-bottom: var(--ddd-spacing-2);
        border-bottom: 1px solid #ddd;
      }
    `];
  }

  render() {
    return html`
      <div class="page-header">
        <h1>${this.pageTitle || 'About Our Association'}</h1>
        <p class="tagline">${this.tagline || 'Excellence in competitive retrieval.'}</p>
      </div>
      
      <div class="story-grid">
        <div class="main-content">
          <slot></slot> </div>
        <div class="sidebar">
          <h3>Quick Facts</h3>
          <slot name="sidebar-items"></slot>
        </div>
      </div>
    `;
  }
}
customElements.define(AboutPage.tag, AboutPage);