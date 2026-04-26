import { LitElement, html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class MapView extends DDD {
  static get tag() { return 'map-view'; }

  static get properties() {
    return {
      locationName: { type: String, attribute: "location-name" },
      address: { type: String },
      // Optional: if you have a real map URL
      mapUrl: { type: String, attribute: "map-url" }
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        margin-top: var(--ddd-spacing-8);
      }
      .map-container {
        border-radius: var(--ddd-radius-lg);
        border: var(--ddd-border-sm);
        overflow: hidden;
        box-shadow: var(--ddd-boxShadow-md);
        position: relative;
        background-color: var(--ddd-theme-default-limestoneLight);
      }
      /* Maintain aspect ratio */
      .map-ratio {
        padding-top: 56.25%; /* 16:9 Aspect Ratio */
        position: relative;
      }
      .placeholder-frame, iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }
      .placeholder-frame {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        color: rgba(0,0,0,0.2);
        font-family: var(--ddd-font-navigation);
      }
      .details {
        padding: var(--ddd-spacing-4);
        background: white;
      }
      h3 { margin: 0 0 var(--ddd-spacing-2) 0; color: var(--ddd-theme-default-beaverBlue); }
      p { margin: 0; font-size: 0.9rem; }
    `];
  }

  render() {
    return html`
      <div class="map-container">
        <div class="map-ratio">
          ${this.mapUrl ? html`
            <iframe src="${this.mapUrl}" allowfullscreen loading="lazy"></iframe>
          ` : html`
            <div class="placeholder-frame">📍</div>
          `}
        </div>
        <div class="details">
          <h3>${this.locationName || 'Hunting Grounds'}</h3>
          <p>${this.address || 'Location Coordinates Pending...'}</p>
        </div>
      </div>
    `;
  }
}
customElements.define(MapView.tag, MapView);