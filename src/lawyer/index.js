import Button from '../components/button/button';
import Logo from '../components/logo/logo';
import LawyerContacts from '../components/card-contacts/card-contacts';
import './lawyer.css';

export default class Lawyer {
  async load() {
    const response = await fetch('http://localhost:3000/lawyer');
    return response.json();
  }

  async render() {
    const lawyer = await this.load();

    return /*html*/ `
      <section class="advocacia-section" id="about">
        <div class="adv-container center--container">
          <h3 class="adv-container__title">${lawyer.title}</h3>
          
          <div class="adv-content">
            <div class="lawyer">
              <img src="${lawyer.urlLawyer}" alt="" />
            </div>  

            <div class="description-container">  
              <div class="description-resume">
                <img src="${lawyer.urlIcon2}" alt="" />
                <p> ${lawyer.description}</p>
              </div>
              
              ${LawyerContacts(lawyer.urlIcon, lawyer.tel, lawyer.email)}   
            </div>

            <div class="logo-buttons">
              ${Logo(
                lawyer.nameLogo,
                lawyer.urlImage,
                lawyer.urlHome
              )}            
              <div class="button-adv">
                  ${Button('Agendar Consulta', '#', 'button--gold')}
                  ${Button('Whatsapp', '#', 'button--gold')}
              </div>
            </div>
          </div>
        </div>
      </section>`;
  }
}
