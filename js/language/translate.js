/**
 * save words as object to localstorage
 * @param language
 * @returns {Promise<void>}
 */
export default async function translate(language) {
    await fetch(`./js/language/${language}.json`)
        .then(response => response.json())
        .then(data => localStorage.setItem('language', JSON.stringify(data)));
}