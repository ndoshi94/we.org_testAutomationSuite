///<reference types="cypress"  />

describe('Signing Up to receive Me To We and We Charity Emails', function()
{
    before(function()
    {
        cy.fixture('SignUpData').then(function(data)
        {
            this.data=data
        })
    })
    //@Positive Scenario
    it('User enters “First Name”, “Last Name”, “Postal Code” and “email” properly', function()
    {
        cy.visit("https://www.trackyourimpact.com/")
        cy.get("input#email-request").type(this.data.FirstName)
        cy.get("#ninja_forms_field_15").type(this.data.LastName)
        cy.get("#ninja_forms_field_17").type(this.data.Email)
        cy.get("#nf_submit_8 > #ninja_forms_field_19").click()
        expect(cy.contains('THANK YOU FOR SIGNING UP'))
    })

    //@negative Scenario 
    it('User does not enter “email” and try to sign up', function()
    {
        cy.visit("https://www.trackyourimpact.com/")
        cy.get("#ninja_forms_field_14").type("May").should('be.empty')
        cy.get("#ninja_forms_field_15").type("Gary")
        cy.get("#ninja_forms_field_16").type("L691R3").should('be.empty')
        cy.get("#ninja_forms_field_17").should('be.empty')
        cy.get("#nf_submit_8 > #ninja_forms_field_19").click()
        cy.get('.mailing-list-form').should('contain.text','Please fill in all required fields')
    })
    
    //@negative Scenario
    it('User does not enter “First Name” and try to sign up', function()
    {
        cy.visit("https://www.trackyourimpact.com/")
        cy.get("#ninja_forms_field_14").should('be.empty')
        cy.get("#ninja_forms_field_15").type("Gary")
        cy.get("#ninja_forms_field_16").type("L691R3").should('be.empty')
        cy.get("#ninja_forms_field_17").type('da33@gmail.com')
        cy.get("#nf_submit_8 > #ninja_forms_field_19").click()
        cy.get('.mailing-list-form').should('contain.text','Please fill in all required fields')
    })

    //@negative Scenario
    it('User does not enter “Last Name” and try to sign up', function()
    {
        cy.visit("https://www.trackyourimpact.com/")
        cy.get("#ninja_forms_field_14").type("Gary")
        cy.get("#ninja_forms_field_15").should('be.empty')
        cy.get("#ninja_forms_field_16").type("L691R3").should('be.empty')
        cy.get("#ninja_forms_field_17").type("dakolla@gmail.com")
        cy.get("#nf_submit_8 > #ninja_forms_field_19").click()
        cy.get('.mailing-list-form').should('contain.text','Please fill in all required fields')
    })

   
    

})