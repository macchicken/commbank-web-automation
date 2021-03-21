/// <reference types="cypress" />

declare namespace Cypress {

    interface Chainable {
        interceptCommbankRequests(): void;
        waiitCommbankRequests(): void;
        getElementByXpath(selector: string, timeout: number): any;
    }
}
