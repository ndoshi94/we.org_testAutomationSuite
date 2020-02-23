///<reference types="cypress"  />


describe('User wants to type 8/13 digit code', function()
{
    it('User types with 8 digit code', function()
    {
        //Positive Scenario
        cy.visit("https://www.trackyourimpact.com/")
        cy.wait(2000)
        cy.get("#code-tracker").should('be.empty').type('97881000')
        cy.wait(2000)
        cy.get('#code-tracker--search-btn').type('{enter}')
        cy.url().should('include','my-impact')
    })

    it('User types more than 8 and less than 13-digit codeser types with 6 digit code', function()
    {
        // Negative Scenario
        cy.visit("https://www.trackyourimpact.com/")
        //cy.wait(2000)
        cy.get("#code-tracker").should('be.empty').type('9788883610')
        cy.wait(2000)
        cy.get('#code-tracker--search-btn').type('{enter}')
        cy.get(".widgets").should('contain.text','Please try again, or email shop@metowe.com')

    })

    it('User types less than “8-digit code”', function()
    {
        // Negative Scenario
        cy.visit("https://www.trackyourimpact.com/")
        //cy.wait(2000)
        cy.get("#code-tracker").should('be.empty').type('610')
        cy.wait(2000)
        cy.get('#code-tracker--search-btn').type('{enter}')
        cy.get(".widgets").should('contain.text','Please enter your 8 digit code')

    })
    
    it('User types more than “13-digit code”', function()
    {
        // Negative Scenario
        cy.visit("https://www.trackyourimpact.com/")
        //cy.wait(2000)
        cy.get("#code-tracker").should('be.empty').type('9788898996666683610')
        cy.wait(2000)
        cy.get('#code-tracker--search-btn').type('{enter}')
        cy.get(".widgets").should('contain.text','Please try again, or email shop@metowe.com')

    })

})