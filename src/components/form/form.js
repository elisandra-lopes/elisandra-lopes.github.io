window.handleSubmit = async e => {
  e.preventDefault();

  const form = document.getElementById('contactForm');
  const formData = new FormData(form);
  const webhookUrl = 'https://5d30bd84ad320937fbfa84b59e89ae0a.m.pipedream.net';

  fetch(webhookUrl, {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
        alert('Dados enviados com sucesso!');
        form.reset();
      } else {
        alert('Falha ao enviar os dados');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Ocorreu um erro ao enviar os dados');
    });
};

export default function Contactform() {
  // Aguarde o carregamento do DOM
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    // Tornar handleSubmit acessível no escopo do elemento HTML
    form.onsubmit = async e => {
      e.preventDefault();
      handleSubmit(e); // Chame a função handleSubmit quando o formulário for enviado
    };
  });

  return /*html*/ `
    
    <form
        class="form-content-info center--container"
        id="contactForm"
        onsubmit="event.preventDefault(); handleSubmit(event);"
    >
        <input
            class="input-form"
            id="name"
            type="text"
            name="name"
            placeholder="Nome Completo"
            required
        />
        
        <input
            class="input-form"
            id="email"
            type="email"
            name="email"
            size="30"
            placeholder="Email"
            required
        />
        
        <input
            class="input-form"
            id="phone"
            type="tel"
            name="phone"
            placeholder="Telefone"
            required
        />

        <input
            class="input-form"
            id="subject"
            type="text"
            name="subject"
            placeholder="Assunto"
            required
        />

        <textarea
            class="textarea-form"
            id="message"
            name="message"
            cols="30"
            rows="5"
            placeholder="Mensagem"
            required
        ></textarea>

        <button
            class="button--gold"
            type="submit"
            class="button-pattern--blue"
        >
            Enviar
        </button>
    </form>`;
}
