
export class ElementUtils {

    public static getTextElement(text: string, timeout: number = 10000) {
        return cy.getElementByXpath(`//text()[normalize-space()="${text}"]`, timeout);
    }

    public static getContainTextElemment(text: string, timeout: number = 10000) {
        return cy.getElementByXpath(`//*[contains(text(), "${text}")]`, timeout);
    }

    public static isEmpty(ele: any) {
        return ele === null || ele === undefined || ele.length < 1;
    }

}
