import { LitElement, html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class HuntDetails extends DDD {
  static get tag() { return 'hunt-details'; }

  static get properties() {
    return {
      eventName: { type: String, attribute: "event-name" },
      date: { type: String },
      time: { type: String },
      prize: { type: String },
      restrictions: { type: String }
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: white;
        padding: var(--ddd-spacing-8);
        border-radius: var(--ddd-radius-md);
        box-shadow: var(--ddd-boxShadow-lg);
        border: var(--ddd-border-sm);
      }
      .header-area {
        margin-bottom: var(--ddd-spacing-6);
        border-bottom: 2px solid rgba(255,255,255,0.1);
        padding-bottom: var(--ddd-spacing-4);
      }
      h2 { margin: 0; font-family: var(--ddd-font-navigation); }
      
      .stat-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: var(--ddd-spacing-4);
      }
      
      .stat-box {
        background: rgba(255,255,255,0.05);
        padding: var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-sm);
        border: 1px solid rgba(255,255,255,0.1);
      }
      
      .label {
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: var(--ddd-theme-default-limestoneMaxLight);
        margin-bottom: var(--ddd-spacing-1);
      }
      
      .value {
        font-size: 1.25rem;
        font-family: var(--ddd-font-primary);
        font-weight: bold;
      }
      
      .warning {
        color: var(--ddd-theme-default-accent);
      }
    `];
  }

  render() {
    return html`
      <div class="header-area">
        <div class="label">Event Summary</div>
        <h2>${this.eventName || 'League Matchup'}</h2>
      </div>
      
      <div class="stat-grid">
        <div class="stat-box">
          <div class="label">🗓️ Date</div>
          <div class="value">${this.date || 'TBD'}</div>
        </div>
        
        <div class="stat-box">
          <div class="label">⏰ Time</div>
          <div class="value">${this.time || 'TBD'}</div>
        </div>
        
        <div class="stat-box">
          <div class="label">🏆 Grand Prize</div>
          <div class="value">${this.prize || '$0.00 Credits'}</div>
        </div>
        
        <div class="stat-box">
          <div class="label">⚠️ Restrictions</div>
          <div class="value warning">${this.restrictions || 'None'}</div>
        </div>
      </div>
    `;
  }
}
customElements.define(HuntDetails.tag, HuntDetails);