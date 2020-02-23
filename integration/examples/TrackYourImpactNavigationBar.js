///<reference types="cypress"  />


describe('Track Your Impact Page', function()
{
    it('Check if the page opened has the correct title name', function()
    {
        cy.visit("https://www.trackyourimpact.com/")
        cy.title().should('be.equal', 'Homepage - Track Your Impact')

    })
    it('Check if links are working in top navigation bar', function()
    {
    cy.visit("https://www.trackyourimpact.com/")

    // check "We.org" title menu link is clickable and mouseover
    cy.get("[title='WE.org']").click().trigger('mouseover')
    
    // Check "Shop" title menu is clickable and mouseover
    cy.get("[title='Shop']").click().trigger('mouseover')
    
    //Check "Track Your Impact" title menu is clickable and mouseover
    cy.get("[title='Track Your Impact']").click().trigger('mouseover')

    // Check "ME to WE" title menu is clickable and mouseover
    cy.get("[title='ME to WE']").click().trigger('mouseover')

    // Check "We Charity" title menu is clickable and mouseover
    cy.get("[title='We Charity']").click().trigger('mouseover')

    // Check "Twitter" Logo in title menu is clickable and mouseover
    cy.get("[class='list-inline social'] li a [class='fa fa-twitter']").click().trigger('mouseover')
    
    // Check "Facebook" Logo in title menu is clickable and mouseover
    cy.get("[class='list-inline social'] li a [class='fa fa-facebook']").click().trigger('mouseover')

    // Check "Instagram" Logo in title menu is clickable and mouseover
    cy.get("[class='list-inline social'] li a [class='fa fa-Instagram']").click().trigger('mouseover')
    
    // Check "Youtube" Logo in title menu is clickable and mouseover
    cy.get("[class='list-inline social'] li a [class='fa fa-YouTube']").click().trigger('mouseover')

    })

    
})