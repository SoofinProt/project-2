import { LitElement, html } from 'lit';
export class FooterSection extends LitElement {
  render() { return html`<footer>© 2026 Community Easter Egg Hunt</footer>`; }
}
customElements.define('footer-section', FooterSection);