const route = require('express').Router()

route.use('/feeds', require('./feeds'))


exports = module.exports = {
    route
}
