import { html, css } from 'lit';
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

export class CalendarPage extends DDD {
  static get tag() { return 'calendar-page'; }

  static get properties() {
    return {
      ...super.properties,
      month: { type: Number },
      year: { type: Number },
      schedule: { type: Array },
    };
  }

  constructor() {
    super();
    this.month = 3;
    this.year = 2026;
    this.schedule = [];
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host { display: flex; gap: var(--ddd-spacing-5); align-items: flex-start; }

        .calendar-container {
          flex: 5;
          background: white;
          border: 2px solid #c084fc;
          border-radius: var(--ddd-radius-lg);
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(106,13,173,0.12);
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--ddd-spacing-4);
          background: #6a0dad;
          color: white;
        }
        .header h2 { margin: 0; font-size: 1.4rem; letter-spacing: 1px; }
        .header button {
          background: rgba(255,255,255,0.2);
          border: 2px solid rgba(255,255,255,0.5);
          color: white;
          font-size: 1rem;
          cursor: pointer;
          border-radius: 6px;
          padding: 4px 10px;
          font-weight: bold;
        }
        .header button:hover { background: rgba(255,255,255,0.35); }
        .day-labels {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          background: #f3e8ff;
          border-bottom: 2px solid #c084fc;
        }
        .day-label {
          text-align: center;
          padding: 6px 0;
          font-weight: bold;
          font-size: 0.8rem;
          color: #6a0dad;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          background-color: #e9d5ff;
          gap: 1px;
        }
        .day {
          background: white;
          min-height: 110px;
          padding: var(--ddd-spacing-2);
          position: relative;
          overflow: hidden;
        }
        .day.outside { background: #faf5ff; }
        .date-circle {
          width: 28px;
          height: 28px;
          background-color: #6a0dad;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
          color: white;
          position: absolute;
          top: 8px;
          right: 8px;
          flex-shrink: 0;
        }

        /* ── Event chips inside calendar cells ── */
        .events-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
          margin-top: 4px;
          /* leave room for date circle */
          padding-right: 36px;
        }
        .event-chip {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: default;
          border-left: 3px solid transparent;
        }
        .event-chip.peewee {
          background: #fef9c3;
          color: #92400e;
          border-left-color: #fbbf24;
        }
        .event-chip.youth {
          background: #dcfce7;
          color: #14532d;
          border-left-color: #4ade80;
        }
        .event-chip.teen {
          background: #dbeafe;
          color: #1e3a8a;
          border-left-color: #60a5fa;
        }
        .event-chip.adult {
          background: #fce7f3;
          color: #831843;
          border-left-color: #f472b6;
        }
        .event-chip.all {
          background: #f3e8ff;
          color: #3b0764;
          border-left-color: #c084fc;
        }
        .event-chip .chip-time {
          font-weight: 500;
          opacity: 0.75;
          margin-right: 3px;
        }
        .event-chip.full-chip {
          opacity: 0.6;
          text-decoration: line-through;
        }

        /* ── Sidebar ── */
        .sidebar {
          flex: 1;
          background: white;
          padding: var(--ddd-spacing-5);
          border: 2px solid #c084fc;
          border-radius: var(--ddd-radius-lg);
          box-shadow: 0 4px 16px rgba(106,13,173,0.12);
        }
        .sidebar h3 {
          margin: 0 0 16px 0;
          color: #6a0dad;
          font-size: 1.1rem;
          border-bottom: 2px solid #e9d5ff;
          padding-bottom: 8px;
        }
        .key-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          font-size: 0.95rem;
          color: #1a1a1a;
          font-weight: 500;
        }
        .chip {
          width: 24px;
          height: 16px;
          border-radius: 4px;
          border: 1px solid rgba(0,0,0,0.15);
          flex-shrink: 0;
        }
        .chip.peewee  { background: #fde68a; }
        .chip.youth   { background: #86efac; }
        .chip.teen    { background: #7dd3fc; }
        .chip.adult   { background: #f9a8d4; }
        .chip.all     { background: #e9d5ff; }

        /* ── Upcoming list in sidebar ── */
        .upcoming-section {
          margin-top: 20px;
          border-top: 2px solid #e9d5ff;
          padding-top: 14px;
        }
        .upcoming-section h3 { margin-bottom: 12px; }
        .upcoming-item {
          margin-bottom: 12px;
          padding: 8px 10px;
          border-radius: 8px;
          border-left: 4px solid;
          font-size: 0.82rem;
          line-height: 1.5;
        }
        .upcoming-item.peewee { background: #fef9c3; border-left-color: #fbbf24; color: #78350f; }
        .upcoming-item.youth  { background: #dcfce7; border-left-color: #4ade80; color: #14532d; }
        .upcoming-item.teen   { background: #dbeafe; border-left-color: #60a5fa; color: #1e3a8a; }
        .upcoming-item.adult  { background: #fce7f3; border-left-color: #f472b6; color: #831843; }
        .upcoming-item.all    { background: #f3e8ff; border-left-color: #c084fc; color: #3b0764; }
        .upcoming-item strong { display: block; font-size: 0.85rem; margin-bottom: 2px; }
        .full-tag {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 800;
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fca5a5;
          border-radius: 10px;
          padding: 1px 5px;
          margin-left: 4px;
          vertical-align: middle;
        }

        @media (prefers-color-scheme: dark) {
          .calendar-container { background: #1e0a3c; border-color: #7c3aed; }
          .day { background: #2a1050; }
          .day.outside { background: #1a0a2e; }
          .day-labels { background: #2d0a5e; border-bottom-color: #7c3aed; }
          .day-label { color: #c084fc; }
          .grid { background-color: #3b0764; }
          .sidebar { background: #1e0a3c; border-color: #7c3aed; }
          .sidebar h3 { color: #c084fc; border-bottom-color: #3b0764; }
          .key-item { color: #e9d5ff; }
          .upcoming-section { border-top-color: #3b0764; }
        }

        @media (max-width: 600px) {
          :host { flex-direction: column; }
          .calendar-container { flex: none; width: 100%; box-sizing: border-box; }
          .sidebar { flex: none; width: 100%; box-sizing: border-box; }
          .day { min-height: 64px; }
          .day-label { font-size: 0.65rem; padding: 4px 0; }
          .header h2 { font-size: 1rem; }
          .date-circle { width: 20px; height: 20px; font-size: 0.65rem; top: 4px; right: 4px; }
          .events-list { padding-right: 26px; }
          .event-chip { font-size: 0.6rem; }
        }
      `
    ];
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

  /** Returns events that fall on a given day number in the current month/year */
  _eventsForDay(day) {
    if (!this.schedule || !this.schedule.length) return [];
    return this.schedule.filter(ev => {
      const d = new Date(ev.date + 'T00:00:00');
      return d.getFullYear() === this.year &&
             d.getMonth() === this.month &&
             d.getDate() === day;
    });
  }

  /** Events in this month, sorted by date then time, for the sidebar list */
  _eventsThisMonth() {
    if (!this.schedule || !this.schedule.length) return [];
    return this.schedule
      .filter(ev => {
        const d = new Date(ev.date + 'T00:00:00');
        return d.getFullYear() === this.year && d.getMonth() === this.month;
      })
      .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
  }

  _formatShortDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  }

  render() {
    const totalDays = this._daysInMonth();
    const startDay = this._startDay();
    const monthEvents = this._eventsThisMonth();

    const cells = Array(startDay + totalDays).fill('').map((_, i) => {
      const day = i - startDay + 1;
      const valid = day > 0 && day <= totalDays;
      const dayEvents = valid ? this._eventsForDay(day) : [];

      return html`
        <div class="day ${valid ? '' : 'outside'}">
          ${valid ? html`
            <div class="events-list">
              ${dayEvents.map(ev => html`
                <div
                  class="event-chip ${ev.division} ${ev.status === 'full' ? 'full-chip' : ''}"
                  title="${ev.name} — ${ev.time} @ ${ev.location}${ev.status === 'full' ? ' (FULL)' : ''}"
                >
                  <span class="chip-time">${ev.time}</span>${ev.name}
                </div>
              `)}
            </div>
            <div class="date-circle">${day}</div>
          ` : ''}
        </div>`;
    });

    return html`
      <div class="calendar-container">
        <div class="header">
          <button @click=${this._prevMonth}>← Prev</button>
          <h2>${this._monthName()} ${this.year}</h2>
          <button @click=${this._nextMonth}>Next →</button>
        </div>
        <div class="day-labels">
          ${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => html`<div class="day-label">${d}</div>`)}
        </div>
        <div class="grid">${cells}</div>
      </div>

      <div class="sidebar">
        <h3>Key</h3>
        <div class="key-item"><span class="chip peewee"></span> Pee-wee</div>
        <div class="key-item"><span class="chip youth"></span> Ages 7-12</div>
        <div class="key-item"><span class="chip teen"></span> Ages 13-17</div>
        <div class="key-item"><span class="chip adult"></span> Adults 18+</div>
        <div class="key-item"><span class="chip all"></span> All Divisions</div>

        ${monthEvents.length ? html`
          <div class="upcoming-section">
            <h3>This Month</h3>
            ${monthEvents.map(ev => html`
              <div class="upcoming-item ${ev.division}">
                <strong>
                  ${ev.name}
                  ${ev.status === 'full' ? html`<span class="full-tag">FULL</span>` : ''}
                </strong>
                ${this._formatShortDate(ev.date)} · ${ev.time}<br>
                ${ev.location}
              </div>
            `)}
          </div>
        ` : ''}
      </div>
    `;
  }
}
customElements.define(CalendarPage.tag, CalendarPage);