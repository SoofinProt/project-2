import { LitElement, html } from 'lit';
export class RegistrationForm extends LitElement {
  render() { return html`<form>Name, Email, Category selection...</form>`; }
}
customElements.define('registration-form', RegistrationForm);