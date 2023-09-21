export default function Logo(nameLogo, urlImage, urlHome) {
    return /*html*/`
    
    <a href="${urlHome}" class="logo">
        <img
            class="logo__image"
            src="${urlImage}"
            alt="logo"
        />
        <span class="logo__name">${nameLogo}</span>
    </a>`;
    
}
