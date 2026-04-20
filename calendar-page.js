import { LitElement, html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class CalendarPage extends DDD {
  static get tag() { return 'calendar-page'; }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: flex; gap: var(--ddd-spacing-5); }
        .calendar-container { flex: 5; background: white; border: 1px solid black; border-radius: var(--ddd-radius-lg); overflow: hidden; }
        .header { display: flex; justify-content: space-between; align-items: center; padding: var(--ddd-spacing-4); background: var(--ddd-theme-default-nittanyNavy); color: white; }
        .grid { display: grid; grid-template-columns: repeat(7, 1fr); background-color: #ddd; gap: 1px; }
        .day { background: white; height: 120px; padding: var(--ddd-spacing-2); position: relative; }
        .date-circle { width: 24px; height: 24px; background-color: #e0e0e0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; position: absolute; top: 8px; right: 8px; }
        
        .sidebar { flex: 1; background: #f0f0f0; padding: var(--ddd-spacing-4); border: 1px solid #ccc; border-radius: var(--ddd-radius-lg); height: fit-content; }
        .key-item { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 0.9rem; }
        .chip { width: 20px; height: 12px; border-radius: 4px; }
      `
    ];
  }

  render() {
    const startColumn = 3; 
    return html`
      <div class="calendar-container">
        <div class="header">
          <button>⬅️</button>
          <h2>April 2026</h2>
          <button>➡️</button>
        </div>
        <div class="grid">
          ${Array(35).fill('').map((_, i) => {
            const day = i - startColumn + 1;
            const isInsideMonth = day > 0 && day <= 30;
            return html`
              <div class="day">
                ${isInsideMonth ? html`<div class="date-circle">${day}</div>` : ''}
              </div>
            `;
          })}
        </div>
      </div>
      <div class="sidebar">
        <h3>Key:</h3>
        <div class="key-item"><span class="chip" style="background:#fff9c4"></span> Pee-wee</div>
        <div class="key-item"><span class="chip" style="background:#dcedc8"></span> Ages 7-12</div>
        <div class="key-item"><span class="chip" style="background:#e1f5fe"></span> Ages 13-17</div>
        <div class="key-item"><span class="chip" style="background:#f3e5f5"></span> Adults 18+</div>
      </div>
    `;
  }
}
customElements.define(CalendarPage.tag, CalendarPage);