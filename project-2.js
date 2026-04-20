import { LitElement, html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import "./navbar-page.js";
import "./calendar-page.js";

export class Project2 extends DDD {
  static get tag() { return 'project-2'; }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: var(--ddd-theme-default-limestoneLight);
          min-height: 100vh;
        }
        .content-area {
          padding: var(--ddd-spacing-8);
          max-width: 1400px;
          margin: 0 auto;
        }
      `
    ];
  }

  render() {
    return html`
      <navbar-page></navbar-page>
      <div class="content-area">
        <calendar-page></calendar-page>
      </div>
    `;
  }
}
customElements.define(Project2.tag, Project2);