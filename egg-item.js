import { LitElement, html } from 'lit';
export class EggItem extends LitElement {
  render() { return html`<span>🥚</span>`; }
}
customElements.define('egg-item', EggItem);