import { setSetting, getSetting } from './settings-manager.js';

const settingKey = 'theme';

export function setTheme(themeid = '') {
    if (themeid) {
        updateThemeOnSite(themeid);

        setSetting(settingKey, themeid);
    }
}

export function getTheme() {
    const themeid = getSetting(settingKey);

    updateThemeOnSite(themeid);

    return themeid;
}

function updateThemeOnSite(themeid) {
    const htmlRoot = document.querySelector("html");
    htmlRoot.setAttribute("data-theme", themeid);
}
