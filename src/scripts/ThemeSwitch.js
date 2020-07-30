import {
    css,
    html,
    LitElement,
} from "https://unpkg.com/lit-element@2.2/lit-element.js?module";

import { setTheme } from './theme-manager.js';

class ThemeSwitch extends LitElement {
    static get styles() {
        return css`
            :host {
                display: inline-block;
            }

            button {
                appearance: none;
                -webkit-appearance: none;
                border: 0;
                border-radius: 0.35em;
                display: flex;
                margin: 0 4px;
                overflow: hidden;
                padding: 8px;
                position: relative;
            }

            button span {
                background: var(--color-background);
                border-radius: 0.35em;
                color: var(--color-text);
                padding: 0.5em;
            }

            button::before,
            button::after {
                bottom: 0;
                content: "";
                position: absolute;
                top: 0;
            }

            button::before {
                background: var(--color-brand);
                left: 0;
                right: 50%;
            }

            button::after {
                background: var(--color-accent);
                left: 50%;
                right: 0;
            }

            button span {
                position: relative;
                z-index: 1;
            }
        `;
    }

    static get properties() {
        return {
            name: { type: String },
            themeid: { type: String },
        };
    }

    setTheme() {
        setTheme(this.themeid);
    }

    render() {
        return html`
            <button @click=${this.setTheme} title="Switch site theme to ${this.name}">
                <span>${this.name}</span>
            </button>
        `;
    }
}

window.customElements.define("theme-switch", ThemeSwitch);
