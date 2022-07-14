class SearchPage {

    // LOCATORS
    constructor(){
        // CITIES
        this.fromInput = ()=> cy.get(':nth-child(1) > .selectize-control > .selectize-input');
        this.fromInputItem = ()=> cy.get('.selectize-dropdown-content > .item');
        this.toInput = ()=> cy.get(':nth-child(2) > .selectize-control > .selectize-input');
        this.toInputItem = ()=> cy.get(':nth-child(2) > .selectize-control > .selectize-dropdown > .selectize-dropdown-content > .item');
        // DATES
        this.fromDateInput = ()=> cy.get('#fecha_ida');
        // PASSENGERS
        this.adultsSelector = ()=> cy.get('#adulto');
        // SEARCH
        this.searchButton = ()=> cy.get('.col-xl > .btn_gral');
        this.dayButton = (txtDay)=> cy.get('.d-flex > div').contains(txtDay);
    }

    // ACTIONS
    typeCity(){
        this.fromInput()
            .type(Cypress.env('fromCity'))
        this.fromInputItem()
            .click()
        this.toInput()
            .type(Cypress.env('toCity'))
            this.toInputItem()
            .click()
    }

    typeDate(){
        this.fromDateInput()
            .type(Cypress.env('fromDate'), {force:true})
        
    }

    selectAdults(){
        this.adultsSelector()
            .select(Cypress.env('qtyAdults'))
    }

    search(){
        this.searchButton()
            .click()
    }

    checkAvailability(){
        const txtDay = Cypress.env('fromDate').slice(0,2)
        this.dayButton(txtDay)
            .parents('div[class^="dia_"]')
            .should('have.class', 'dia_no_disponible')
    }

    // NAVIGATION
    visitSearchPage(){
        cy.visit('https://webventas.sofse.gob.ar');
    }

}
export default new SearchPage;