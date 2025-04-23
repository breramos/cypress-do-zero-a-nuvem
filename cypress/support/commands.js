    //  Primeiro exemplo do uso de comandos customizados onde a massa está fixa
    //  mas é chamada no arquivo de funções dos testes assim: 
    
    //  cy.fillMandatoryFieldsAndSubmit()

    //  Comando customizado v1:

    //  Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    //  cy.get('#firstName').type('João')
    //  cy.get('#lastName').type('Souza Azevedo')
    //  cy.get('#email').type(joaoazevedo@example.com)
    //  cy.get('#open-text-area').type('Obrigado')
    //  cy.contains('button', 'Enviar').click()
    //  })

    //  Segundo exemplo do uso de comandos customizados
    //  onde a massa de dados fica num objeto dentro do it e ela é passada como argumento
    //  para o comando

    //  Comando customizado v2:
    
    //  Cypress.Commands.add('fillMandatoryFieldsAndSubmit', data => {
    //  cy.get('#firstName').type(data.firstName)
    //  cy.get('#lastName').type(data.lastName)
    //  cy.get('#email').type(data.email)
    //  cy.get('#open-text-area').type(data.textField)
    //  cy.contains('button', 'Enviar').click()
    //  })
      
    //  Comando customizado v2 sendo chamado dentro do teste:
    
    //  cy.fillMandatoryFieldsAndSubmit(data)
    
    // Comando customizado v3 onde data é o argumento da função 
    // mas possui um valor padrão que é o objeto contendo a massa

    Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe123@example.com',
    textField: 'Gostei muito de tudo'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.textField)
    cy.contains('button', 'Enviar').click()
})