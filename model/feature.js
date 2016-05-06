module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var feature = new Schema({
            
            Key:String,
            Value:String,
            Active:String

    });

    var Feature = mongoose.model('Feature', feature);
    return Feature;
};