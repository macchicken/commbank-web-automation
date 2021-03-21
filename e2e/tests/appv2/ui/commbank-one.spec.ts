import { BankingPageActions, CommbankActions, CommbankMobileActions, PageElementStorageSevice, HomeLoanPageActions,
        InsurancePageActions, InvestmentPageActions, BusinessPageActions, InstitutionalPageActions } from "../../../action/appv2/commBankActions";
import { APPTYPE } from "../../../constants";

function usualViewTest(commbankActions: CommbankActions) {
    cy.visit(`${Cypress.env(APPTYPE.COMMBANK)}`);
    cy.waiitCommbankRequests();
    commbankActions.gotoTab('Banking');
    new BankingPageActions().verifyPageContent();
    commbankActions.gotoTab('Home loans');
    new HomeLoanPageActions().verifyPageContent();
    commbankActions.gotoTab('Insurance');
    new InsurancePageActions().verifyPageContent();
    commbankActions.gotoTab('Investing & super');
    new InvestmentPageActions().verifyPageContent();
    commbankActions.gotoTab('Business');
    new BusinessPageActions().verifyPageContent();
    commbankActions.gotoTab('Institutional');
    new InstitutionalPageActions().verifyPageContent();
}

function mobileViewTest(commbankActions: CommbankActions) {
    cy.visit(`${Cypress.env(APPTYPE.COMMBANK)}`);
    cy.waiitCommbankRequests();
    cy.xpath(`//a[@aria-label='Hamburger Menu']`, { timeout: 30000 }).click().wait(3000);
    commbankActions.gotoTab('Banking');
    new BankingPageActions().verifyPageContent();
    cy.xpath(`//a[@aria-label='Hamburger Menu']`, { timeout: 30000 }).click().wait(3000);
    commbankActions.gotoTab('Home loans');
    new HomeLoanPageActions().verifyPageContent();
    cy.xpath(`//a[@aria-label='Hamburger Menu']`, { timeout: 30000 }).click().wait(3000);
    commbankActions.gotoTab('Insurance');
    new InsurancePageActions().verifyPageContent();
    cy.xpath(`//a[@aria-label='Hamburger Menu']`, { timeout: 30000 }).click().wait(3000);
    commbankActions.gotoTab('Investing & super');
    new InvestmentPageActions().verifyPageContent();
    cy.xpath(`//a[@aria-label='Hamburger Menu']`, { timeout: 30000 }).click().wait(3000);
    commbankActions.gotoTab('Business');
    new BusinessPageActions().verifyPageContent();
    cy.xpath(`//a[@aria-label='Hamburger Menu']`, { timeout: 30000 }).click().wait(3000);
    commbankActions.gotoTab('Institutional');
    new InstitutionalPageActions().verifyPageContent();
}

describe("User Visit Commbank website", function () {
    const commbankActions = new CommbankActions();
    const messages: string[] = [];

    beforeEach(function () {
        cy.interceptCommbankRequests();
        PageElementStorageSevice.getInstance().reestStorage();
    });
    afterEach(function () {
        const message = PageElementStorageSevice.getInstance().getstorage().reduce(
            function (previous: Array<string>, current) {
            if (!current.exist) {
                previous.push(current.message);
            }
            return previous;
        },  []).join('\n');
        if (message.length > 0) {
            cy.contains(message).should('not.exist');
            messages.push(message);
        }
    });
    after(function () {
        if (messages.length > 0) {
            throw new Error(messages.join('\n'));
        }
    });

    it("user visit main page 1280x1000", function () {
        usualViewTest(commbankActions);
    });

    it("user visit main page 1440x900", function () {
        cy.viewport(1440, 900);
        usualViewTest(commbankActions);
    });

    it("user visit main page 1536x960", function () {
        cy.viewport(1536, 960);
        usualViewTest(commbankActions);
    });

    it("user visit main page 1366x768", function () {
        cy.viewport(1366, 768);
        usualViewTest(commbankActions);
    });
});

describe("User Visit Commbank website mobile", function () {
    const commbankActions = new CommbankMobileActions();
    const messages: string[] = [];
    beforeEach(function () {
        cy.interceptCommbankRequests();
        PageElementStorageSevice.getInstance().reestStorage();
    });
    afterEach(function () {
        const message = PageElementStorageSevice.getInstance().getstorage().reduce(function (previous: Array<string>, current) {
            if (!current.exist) {
                previous.push(current.message);
            }
            return previous;
        },                                                                         []).join('\n');
        if (message.length > 0) {
            cy.contains(message).should('not.exist');
            messages.push(message);
        }
    });
    after(function () {
        if (messages.length > 0) {
            throw new Error(messages.join('\n'));
        }
    });

    it("user visit main page 375x667", function () {
        cy.viewport(375, 667);
        mobileViewTest(commbankActions);
    });

    it("user visit main page 768x1024", function () {
        cy.viewport(768, 1024);
        mobileViewTest(commbankActions);
    });

    it("user visit main page 414x896", function () {
        cy.viewport(414, 896);
        mobileViewTest(commbankActions);
    });

});
