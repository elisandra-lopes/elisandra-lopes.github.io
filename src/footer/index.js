import './footer.css';
export default class Footer {
  async load() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/footer`);
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
