import Contactform from '../components/form/form';
import '../contact/contact.css';
import '../components/card-contacts/card-contacts.css';
import '../components/form/form.css';
export default class Contact {
  async load() {
    const response = await fetch('http://localhost:3000/contact');
    return response.json();
  }

  async render() {
    const contact = await this.load();

    return /*html*/ `
      <section class="contact-container" id="contact">
        <div class="contact-content">

            <div class="info-content">
              <h3 class="info-content__title">${contact.title}</h3>
              <p>${contact.subtitle}</p>
              <div>
                <div class="info-content__contact">
                  <img src="${contact.urlIconCall}" alt="" /><p>${
      contact.tel
    }</p>
                </div>
                <div class="info-content__contact">
                  <img src="${contact.urlIconEmail}" alt="" /><p>${
      contact.email
    }</p>
              </div>
              
              </div>
              <p>${contact.addres}</p>
              <iframe src="${contact.mapa}"></iframe>
            </div>

            <div class="form-content">
              <p>${contact.description1}</p>
              <p>${contact.description2}</p>
              ${Contactform()}
            </div>
        </div>          
      </section>`;
  }
}
