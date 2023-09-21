import Button from '../components/button/button';
import Card from '../components/card-service/card-service';
import './services.css';
import '../components/card-service/card-service.css';
import '../components/button/button.css';
export default class Services {
  async load() {
    const response = await fetch('http://localhost:3000/services');
    return response.json();
  }
  async render() {
    const services = await this.load();
    return /*html*/ `
      <section class="main-services" id="services">
        <div class="services-content center--container">
          <h3 class="services-content__title">${services.title}</h3>
          <p class="services-content__subtitle">${services.subtitle}</p>
          <div class="service-cards">
            ${services.services
              .map(service => Card(service.title, service.description))
              .join('')}
          </div>
          <div class="services-button">
            ${Button('Agendar Consulta', '#', 'button--blue')}
          </div>
        </div>
      </section>`;
  }
}
