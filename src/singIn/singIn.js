function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential); // decodificar
  console.log(data);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      '907237518042-mevl6aoj1su9fn0nck0hnsiorl1etuq2.apps.googleusercontent.com',
    callback: handleCredentialResponse,
  });

  google.accounts.id.renderButton(document.getElementById('buttonDiv'), {
    theme: 'standard',
    size: 'standard',
    shape: 'pill',
    text: 'signin',
    logo_alignment: 'left',
  });
  google.accounts.id.prompt(); // also display the One Tap dialog
};

//text: 'continue_with',
