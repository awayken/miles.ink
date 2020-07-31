import {
    css,
    html,
    LitElement,
} from "lit-element";

import { setTheme } from '../utils/theme-manager.js';

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
                cursor: pointer;
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
