const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "hp5anw",
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {}
})

// video: true -> caso queria deixar habilitada a gravação da tela durante execução

