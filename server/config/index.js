let dev = require('../env/dev')
let uat = require('../env/uat')
let prod = require('../env/prod')

let env = process.env.NODE_ENV || 'development'

const config = {
    development: dev,
    uat: uat,
    production: prod
}


module.exports = config[env]
