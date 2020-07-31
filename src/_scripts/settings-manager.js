export function setSetting(key, value) {
    if (key) {
        const currentSettings = getSettings();

        setSettings({
            ...currentSettings,
            [key]: value,
        });
    }
}

export function getSetting(key) {
    if (key) {
        const currentSettings = getSettings();

        return currentSettings[key];
    }

    return null;
}

function setSettings(settingsMap) {
    if (settingsMap) {
        const settingsString = JSON.stringify(settingsMap);

        window.localStorage.setItem('settings', settingsString);
    }
}

function getSettings() {
    if (window.localStorage) {
        const settingsString = window.localStorage.getItem('settings');

        if (settingsString && settingsString.length) {
            return JSON.parse(settingsString);
        }
    }

    return {};
}
