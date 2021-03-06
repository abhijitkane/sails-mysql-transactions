/**
 * This file contains all error messages intended to be used by sails-mysql-transactions
 * @module transaction-errors
 */
var util = require('./util'),
    AdapterError; // constructor
/**
 * @constructor
 * @inherits Error
 */
AdapterError = function (message) {
    if (!(this instanceof AdapterError)) {
        return new AdapterError(message);
    }
    Error.captureStackTrace(this, this.constructor);
    arguments.length && (this.message = message);
    this.name = 'AdapterError';
};

AdapterError.prototype = new Error();
AdapterError.prototype.constructor = AdapterError;

util.extend(AdapterError, {
    MEDIATOR_INVALID_MODEL: 'Invalid model forwarded to transaction.',
    MEDIATOR_INVALID_TXN: 'Invalid transaction parameters.',

    TRANSACTION_NOT_SETUP: 'Transaction.setup() has not been called. Missing ORM registration?',
    TRANSACTION_CONNECTION_OVERLAP: 'Multiple connections got associated with a single transaction. Nasty!',
    TRANSACTION_UNINITIATED: 'Transaction was used without doing Transaction.start();',
    TRANSACTION_UNINITIATED_COMM: 'Transaction commit failed since transaction has either expired or not started',
    TRANSACTION_UNINITIATED_ROLL: 'Transaction rollback failed since transaction has either expired or not started',

    REPLICATION_NO_SOURCE: 'Replication source not found'
});

module.exports = AdapterError;
