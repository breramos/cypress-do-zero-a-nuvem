describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => cy.visit('./src/index.html'))

  const preencherFormulario = () => {
    cy.get('#firstName')
      .type('João').should('have.value', 'João')
    cy.get('#lastName')
      .type('Santos Azevedo').should('have.value', 'Santos Azevedo')
    cy.get('#email')
      .type('joaoazevedo123@example.com').should('have.value', 'joaoazevedo123@example.com')
    cy.get('#open-text-area')
      .type('Adorei a experiência de fazer curso com vocês!').should('have.value', 'Adorei a experiência de fazer curso com vocês!')
  };


  it('Caso de teste 1 - Validar o título da aplicação', () => {
    cy.title()
      .should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('Caso de teste 2 - Validar preenchimento dos campos do formulário', () => {
    preencherFormulario()

  })

  it('Caso de teste 3 - Validar envio do formulário', () => {
    preencherFormulario()
    cy.contains('button', 'Enviar').click();
    cy.get('.success').should('be.visible')
  })

  it('Caso de teste 4 - Validar escrita dinâmica no campo de texto', () => {
    const longText = Cypress._.repeat('Lorem ipsum dolor sit amet', 14)
    
    cy.get('#open-text-area').type(longText, {delay: 0})
      .should('have.value', longText);
  })

  it('Caso de teste 5 - Validar preenchimento do campo email com formato inválido', () => {
    const emailInvalido = 'joaoazevedo@' 

    cy.get('#email').type(emailInvalido)
      .should('have.value', emailInvalido)
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('Caso de teste 6 - Validar que o campo telefone fica vazio ao inserir caracteres não numéricos', () => {
    
    cy.get('#phone').type('Lorem ipsum')
      .should('have.value', '');

  })

  it('Caso de teste 7 - Validar obrigatoriedade do campo após marcar meio de contato como telefone', () => {
    
    preencherFormulario()
    cy.get('#phone-checkbox').check()
    cy.contains('button', 'Enviar').click();

    cy.get('.error').should('be.visible')

  })

  it('Caso de teste 8 - Validar que os campos são limpos após digitação', () => {
    
    cy.get('#firstName')
      .type('João')
      .should('have.value', 'João')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('Santos Azevedo')
      .should('have.value', 'Santos Azevedo')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('joaoazevedo123@example.com')
      .should('have.value', 'joaoazevedo123@example.com')
      .clear()
      .should('have.value', '')
    cy.get('#phone')
      .type('1998293402')
      .should('have.value', '1998293402')
      .clear()
      .should('have.value', '')
    
  })

  it('Caso de teste 9 - Validar obrigatoriedade dos campos', () => {
    
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('Caso de teste 10 - Validar envio do formulário com sucesso utilizando comandos customizados', () => {
    
    //  Segundo exemplo do uso de comandos customizados
    //  onde a massa de dados fica num objeto dentro do it e ela é passada como argumento
    //  para o comando customizado
    
    //  const data = {
    //    firstName: 'João',
    //    lastName: 'Souza Azevedo',
    //    email: 'joaoazevedo@example.com',
    //    textField: 'Obrigado pelo curso'
    // }
    
    //  Comando customizado v2 sendo chamado dentro do teste
    //  Ele recebe como argumento o nome da const que contém a massa
    
    //  cy.fillMandatoryFieldsAndSubmit(data)
    
    //  Comando customizado v3 sendo chamado dentro do teste sem a const data
    //  como argumento porque a massa está dentro do arquivo commands

    cy.fillMandatoryFieldsAndSubmit()
    
    cy.get('.success').should('be.visible')

  })

  it('Caso de teste 11 - Validar seleção de um produto no menu select usando texto', () => {
    // Seleção pelo texto Youtube
    cy.get('select').select('YouTube')
    .should('have.value', 'youtube')
    // Necessário escrever exatamente o texto que está na opção
    // A validação dentro do get é referente ao valor que está contido na opção

  })

  it('Caso de teste 12 - Validar seleção de um produto no menu select usando valor', () => {
    // Seleção pelo valor 'value' contido na opção
    cy.get('#product').select('youtube')
      .should('have.value', 'youtube') 
    // A validação dentro do get é referente ao valor que está contido na opção
    
  })

  it('Caso de teste 13 - Validar seleção de um produto no menu select usando índice', () => {
    // Seleção pelo índice
    cy.get('select').select(4)
    .should('have.value', 'youtube')
    // A validação dentro do get é referente ao valor que está contido na opção
  
  })

  it('Caso de teste 14 - Validar marcação da opção "Feedback" no menu de atendimento', () => {
    // Outra maneira de identificar o radiobutton através desse seletor 
    // cy.get('input[type="radio"] [value="feedback"]').check()

    cy.get('[type="radio"]').check('feedback')
      .should('be.checked')
  })

  it('Caso de teste 15 - Validar marcação de todas as opções no menu de atendimento', () => {
    // cy.get('[type="radio"]')
    //  .each((typeOfService) => {
    //    cy.wrap(typeOfService)
    //      .check()
    //      .should('be.checked')
    //  })
    //
    //
    cy.get('[type="radio"]')
      .each(() => {
        cy.get('[type="radio"]').check()
        .should('be.checked')
    })
  
  })

  it('Caso de teste 16 - Validar marcar duas opções do checkbox e desmarcar a última', () => {
    // cy.get('[type="checkbox"]')
    // .as('checkboxes')
    // .check()
    
    // cy.get('@checkboxes')
    //   .each(checkbox => {
    //     cy.wrap(checkbox).should('be.checked')
    //   })

    //  cy.get('@checkboxes').last()
    //    .uncheck()
    //    .should('not.be.checked')

    cy.get('[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
    
  })

  it('Caso de teste 17 - Validar upload de arquivo', () => {
    
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should((input) => {
        // console.log(input[0].files[0].name)
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  it('Caso de teste 18 - Validar upload de arquivos no estilo "Arrasta e solta" ', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  // Função selectFile recebe dois argumentos: 
  // o primeiro é o caminho relativo do arquivo a fazer upload
  // o segundo é um objeto em JS que possui propriedade 'action' com valor 'drag-drop'
  
  })

  it('Caso de teste 19 - Validar selecionar um arquivo utilizando uma fixture para a qual foi dada um alias ', () => {
    // Outra maneira de resolver sem usar callback
    
    // cy.fixture('example.json').as('arquivoExemplo');
    // cy.get('#file-upload')
    // .selectFile('@arquivoExemplo')
    // .invoke('prop', 'files') - Acessa a lista de arquivos diretamente
    // .its('0') - Acessa o primeiro arquivo da lista
    // .invoke('prop', 'name') - Acessa a propriedade 'name' do arquivo
    // .should('equal', 'example.json')

    // Segunda maneira de resolver sem usar callback

    // cy.fixture('example.json').as('arquivoExemplo');
    // cy.get('#file-upload')
    // .selectFile('@arquivoExemplo')
      //  cy.get('#file-upload')
      // .should('have.prop', 'files')
      // .its('0.name') - Acessa o 1º item da lista 'files' e pega o nome do arquivo
      // .should('equal', 'example.json')

    // Outra maneira de resolver usando .then

    // cy.get('#file-upload').then((btnUploadFile) => {
    //   expect(btnUploadFile[0].files[0].name).to.equal('example.json');
    // });
    
    // Outra maneira de resolver usando cy.wrap

    // cy.get('#file-upload')
    //  .then((fileInput) => {
    //    cy.wrap(fileInput[0].files[0]).should('have.property', 'name', 'example.json')
    // })

    // Acessa a pasta fixtures e não precisa acrescentar caminho relativo

    cy.fixture('example.json').as('arquivo-exemplo')

    cy.get('#file-upload')
    .selectFile('@arquivo-exemplo')
    .should((btnUploadFile) => {
      // console.log(btnUploadFile) - utilizado para verificar as propriedades do elemento
      expect(btnUploadFile[0].files[0].name).to.equal('example.json')
    })

  })

  it('Caso de teste 20 - Validar política de privacidade aberta em outra guia sem o clique', () => {
    cy.contains('a', 'Política de Privacidade') 
    // Procura o elemento do tipo 'a' que contém o txt passado depois
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href', 'privacy.html')
      // '.and' permite fazer mais de uma verificação do mesmo elemento sem repetir '.should'
  })

  it('Caso de teste 21 - Validar acesso à página da política de privacidade sem o "target" ', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()
    
    cy.url().should('include', 'privacy.html')
    // Para usar o '.invoke' a página que abre em outra aba 
    // deve estar no mesmo domínio (ou subdomínio) da aplicação em teste
  })

})


