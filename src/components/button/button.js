export default function Button(text, url, additionalClass) {
  return /*html*/ `
    <a href="${url}" class="button ${additionalClass}">
        ${text}
    </a>`;
}
