import './footer.css';
export default class Footer {
  async load() {
    const response = await fetch('http://localhost:3000/footer');
    return response.json();
  }

  async render() {
    const footer = await this.load();

    return /*html*/ `
        <div class="center--container">
                <p>${footer.text}</p>
        </div>
        `;
  }
}
