export default function LawyerContacts(urlIcon, tel, email) {
  return /*html*/ `
    <div class="description-contact">
      <img src="${urlIcon}" alt="" />
      <p>${tel}</p>
      <p>${email}</p>
    </div>`;
}
