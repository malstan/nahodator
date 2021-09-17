/**
 * save words as object to localstorage
 * @param language
 * @returns {Promise<void>}
 */
class Translate {

    async init() {
        if (localStorage.getItem("language") === null) {
            await this.translatePage('sk');
            document.querySelector('#language').innerText = "EN";
            localStorage.setItem('language', 'en');
        } else
            document.querySelector('#language').innerText = localStorage.getItem('language').toUpperCase();

        document.querySelector('#language').addEventListener("click", this.switchLanguage);
    }

    /**
     * fetch language
     * @param language
     */
    translatePage = async (language) => {
         await fetch(`./js/language/${language}.json`)
            .then(response => response.json())
            .then(data => localStorage.setItem('languageContent', JSON.stringify(data)))
    }

    /**
     *
     */
    switchLanguage = async () => {
        const langSwitch = document.querySelector('#language');
        const lang = langSwitch.innerText;

        if (lang === 'SK') {
            await this.translatePage('sk');
            localStorage.setItem('language', 'en');
        } else {
            await this.translatePage('en');
            localStorage.setItem('language', 'sk');
        }

        window.location.reload();
    }
}

export default new Translate();