describe('Política de privacidade da aplicação CAC - TAT', () => {
    beforeEach(() => cy.visit('./src/privacy.html'))

    it('Caso de teste 1 - Validar página da política de privacidade de maneira independente', () => {
        cy.contains('h1', 'Política de Privacidade')
          .should('be.visible')
    })

})
