/**
 * class for home page
 */
class Home {
  render(targetElm) {
    document.querySelector(targetElm).innerHTML = this.getContent(
      JSON.parse(localStorage.languageContent).home
    );
  }

  getContent(lang) {
    return `
            <div class="container">
              <h1>${lang.title}</h1>
              <p>${lang.info}</p>
              <p>${lang.warning}</p>
              <p class="iconContainer">
                <a class="link" href="https://github.com/malstan/nahodator"><i class="fab fa-lg fa-github"></i></a>
                <a class="link" href="https://github.com/malstan/nahodator/releases/download/nahodator/nahodator-1.5.1-beta.apk"><i class="fab fa-lg fa-android"></i></a>
              </p>
            </div>
        `;
  }
}

export default new Home();
