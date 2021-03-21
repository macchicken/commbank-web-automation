import { Result } from "../../models/result";
import { ElementUtils } from "./utils";

export class CommbankActions {

    public gotoTab(name: string) {
        cy.xpath(`//*[@class='commbank-list']//a[normalize-space()='${name}']`, { timeout: 30000 }).should('exist').click();
    }

}

export class CommbankMobileActions extends CommbankActions {

    public gotoTab(name: string) {
        cy.xpath(`//*[@id='hamModal']//a[normalize-space()='${name}']`, { timeout: 30000 }).should('exist').click();
    }

}

export class PageElementStorageSevice {

    private static instance: PageElementStorageSevice;
    private storage: Result[];

    private constructor() {
        this.storage = [];
    }

    public static getInstance(): PageElementStorageSevice {
        if (!PageElementStorageSevice.instance) {
            PageElementStorageSevice.instance = new PageElementStorageSevice();
        }

        return PageElementStorageSevice.instance;
    }

    public getstorage(): Result[] {
        return this.storage;
    }

    public addstorage(value: Result) {
        this.storage.push(value);
    }

    public reestStorage() {
        this.storage = [];
    }

}

export class SectionPageActions {

    storageService: PageElementStorageSevice;

    constructor() {
        this.storageService = PageElementStorageSevice.getInstance();
    }

    public verifyPageContent() {
        this.verifyCommonContents();
        this.verifyCustomContents();
    }

    public verifyCommonContents() {
        ElementUtils.getTextElement('We can help').then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'help section does not exist'));
        });
        ElementUtils.getContainTextElemment('Commonwealth Bank of Australia').then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'footer does not exist'));
        });
    }

    public verifyCustomContents() {}
}

export class BankingPageActions extends SectionPageActions {

    constructor() {
        super();
    }

    public verifyCustomContents() {
        ElementUtils.getTextElement(`Banking tools, guidance & support`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'tools section does not exist'));
        });
        ElementUtils.getTextElement(`Banking for the stage you're at`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'banking stage does not exist'));
        });
        ElementUtils.getTextElement(`Access your money anytime, anywhere`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'anytime section does not exist'));
        });
        ElementUtils.getTextElement(`Get the banking advantage`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'banking advantage does not exist'));
        });
    }

}

export class HomeLoanPageActions extends SectionPageActions {

    constructor() {
        super();
    }

    public verifyCustomContents() {
        ElementUtils.getTextElement(`Choose a home loan that’s right for you`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'home loan section does not exist'));
        });
        ElementUtils.getTextElement(`Home loan support`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'home loan support section does not exist'));
        });
    }
}

export class InsurancePageActions extends SectionPageActions {

    constructor() {
        super();
    }

    public verifyCustomContents() {
        ElementUtils.getTextElement(`Your insurance rights`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'insurance rights section does not exist'));
        });
        ElementUtils.getTextElement(`Travel insurance`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'travel insurance section does not exist'));
        });
    }
}

export class InvestmentPageActions extends SectionPageActions {

    constructor() {
        super();
    }

    public verifyCustomContents() {
        ElementUtils.getTextElement(`Investing`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'Investing section does not exist'));
        });
        ElementUtils.getTextElement(`Important super forms & documents`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'form section does not exist'));
        });
    }
}

export class BusinessPageActions extends SectionPageActions {

    constructor() {
        super();
    }

    public verifyCustomContents() {
        ElementUtils.getTextElement(`More help & tools`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'tools section does not exist'));
        });
        ElementUtils.getTextElement(`For however you do business`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'do business section does not exist'));
        });
    }
}

export class InstitutionalPageActions extends SectionPageActions {

    constructor() {
        super();
    }

    public verifyCustomContents() {
        ElementUtils.getTextElement(`Unique insights and research`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'research section does not exist'));
        });
        ElementUtils.getTextElement(`A brighter Australia starts here`).then((ele: any) => {
            this.storageService.addstorage(new Result(!ElementUtils.isEmpty(ele), 'starts here section does not exist'));
        });
    }
}
