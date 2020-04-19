const { createContainer, asValue } = require('awilix')

conSet = {}
const container = createContainer()
container.register({
  database: asValue(con)
})

repo = {}
container.registerValue({ repo })
