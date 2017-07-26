const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete', 'patch'])
BillingCycle.updateOptions({ new: true, runValidators: true })

module.exports = BillingCycle