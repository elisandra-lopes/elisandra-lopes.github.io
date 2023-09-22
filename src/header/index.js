import Button from '../components/button/button';
import Logo from '../components/logo/logo';
import ItemMenu from '../components/item-menu/item-menu';
import './header.css';
import '../components/logo/logo.css';
import '../components/button/button.css';

// import '../singIn/singIn.js';

export default class Header {
  async load() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/header`);
    return response.json();
  }

  async render() {
    const header = await this.load();

    return /*html*/ `
        <header>
          <div class="header-content center--container">
          ${Logo(header.nameLogo, header.urlImage, header.urlHome)}    
            <div class="menu">
              ${header.itensMenu
                .map(item => ItemMenu(item.item, item.url))
                .join('')}
              ${Button('Agendar Consulta', '#', 'button--gold')}
              <!--<div id="buttonDiv">Logar</div> -->
            </div>
          </div>
        </header>`;
  }
}

//'../src/singIn/index.html'
