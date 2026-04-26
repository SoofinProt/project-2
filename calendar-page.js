import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class CalendarPage extends DDD {
  static get tag() { return 'calendar-page'; }
  
  static get properties() {
    return { events: { type: Array } };
  }

  constructor() {
    super();
    this.events = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchSchedule();
  }

  async fetchSchedule() {
    const res = await fetch('/api/schedule.json');
    this.events = await res.json();
  }

  static get properties() {
    return {
      ...super.properties,
      month: { type: Number },
      year: { type: Number },
    };
  }

  constructor() {
    super();
    this.month = 3;
    this.year = 2026;
  }

  static get styles() {
    return [super.styles, css`
      :host { display: flex; gap: var(--ddd-spacing-5); padding: var(--ddd-spacing-5); }
      .calendar-container { flex: 4; background: white; border: var(--ddd-border-sm); border-radius: var(--ddd-radius-md); }
      .grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: #ccc; }
      .day { background: white; min-height: 100px; padding: var(--ddd-spacing-2); position: relative; }
      .event-chip { 
        font-size: 0.7rem; 
        padding: 2px 4px; 
        margin-top: 4px; 
        border-radius: var(--ddd-radius-xs);
        border: 1px solid rgba(0,0,0,0.1);
      }
      .sidebar { flex: 1; padding: var(--ddd-spacing-4); background: var(--ddd-theme-default-limestoneLight); border-radius: var(--ddd-radius-md); }
    `];
  }

  _monthName() {
    return new Date(this.year, this.month).toLocaleString('default', { month: 'long' });
  }

  _prevMonth() {
    if (this.month === 0) { this.month = 11; this.year -= 1; }
    else { this.month -= 1; }
  }

  _nextMonth() {
    if (this.month === 11) { this.month = 0; this.year += 1; }
    else { this.month += 1; }
  }

  _daysInMonth() {
    return new Date(this.year, this.month + 1, 0).getDate();
  }

  _startDay() {
    return new Date(this.year, this.month, 1).getDay();
  }

  render() {
    const startColumn = 3; // April 2026 starts on Wednesday
    return html`
      <div class="calendar-container">
        <div class="grid">
          ${Array(35).fill('').map((_, i) => {
            const dayNum = i - startColumn + 1;
            const isInside = dayNum > 0 && dayNum <= 30;
            const dayString = `2026-04-${dayNum.toString().padStart(2, '0')}`;
            const todaysEvents = this.events.filter(e => e.date === dayString);

            return html`
              <div class="day">
                ${isInside ? html`<strong>${dayNum}</strong>` : ''}
                ${todaysEvents.map(e => html`
                  <div class="event-chip" style="background: ${e.color}">${e.title}</div>
                `)}
              </div>
            `;
          })}
        </div>
        <div class="grid">${cells}</div>
      </div>
      <div class="sidebar">
        <h3>Legend</h3>
        <p>Explore April 2026 events for the Egg Hunt Association.</p>
      </div>
    `;
  }
}
customElements.define(CalendarPage.tag, CalendarPage);