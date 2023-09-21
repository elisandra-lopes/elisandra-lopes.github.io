import Button from '../components/button/button';
import './main.css';
export default class Main {
  async load() {
    const response = await fetch('http://localhost:3000/main');
    return response.json();
  }

  async render() {
    const main = await this.load();

    return /*html*/ `
      <section class="main-container">
      <div class="main-content center--container">
        <div class="main-text">
          <h1 class="main-text__title">${main.title}</h1>
          <p class="main-text__subtitle">
            ${main.subtitle}
          </p>
        </div>
        <div class="main-buttons">
          <!-- ${Button('Agendar Consulta', '#', 'button--transparent')}
          ${Button('Whatsapp', '#', 'button--transparent')} -->
        </div>
      </div>
    </section>`;
  }
}
