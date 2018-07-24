var path = require('path');
var fs = require('fs');
var sequelize = require('../../../../core/server/config/sequelize');
var Profile = require('./profile');
var AppTemplate = require('./app-template');
var AppSender = require('./app-sender');
var AppSenderHistory = require('./app-sender-history');



var models = {
    Profile: Profile,
    AppTemplate: AppTemplate,
    AppSender: AppSender,
    AppSenderHistory: AppSenderHistory,
};

module.exports = models;