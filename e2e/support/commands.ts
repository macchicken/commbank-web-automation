///<reference path="../global.d.ts" />

import { APPTYPE, REQUESTTYPE } from '../constants';

Cypress.Commands.add('interceptCommbankRequests', () => {
    cy.intercept(`${Cypress.env(APPTYPE.COMMBANK)}`).as(REQUESTTYPE.COMMBANK);
    cy.intercept(`cba.`).as(REQUESTTYPE.CBA);
});

Cypress.Commands.add('waiitCommbankRequests', () => {
    cy.wait(`@${REQUESTTYPE.CBA}`, { timeout: 51000 });
    cy.wait(`@${REQUESTTYPE.COMMBANK}`, { timeout: 51000 });
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Cypress.Commands.add('getElementByXpath', (selector, timeout) => {
    cy.document().then({ timeout }, doc => {
        const iterator = doc.evaluate(selector, doc, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        try {
            const nodes = [];
            let node = iterator.iterateNext();
            while (node) {
                nodes.push(node);
                node = iterator.iterateNext();
            }
            return nodes;
        } catch (e) {
            console.error(e);
            return null;
        }
    });
});
