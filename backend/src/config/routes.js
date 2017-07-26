const express = require('express')

module.exports = (app) => {
    
    const Router = express.Router()
    app.user('/api', Router)

    const BillingCycle = require('../api/billingCycle/billingCycleServices')
    BillingCycle.register(Router, '/billing-cycles')

}