sap.ui.define([
], function() {
    "use strict";
    return {
    	iCodeSuccess	: 1,
    	iCodeWarn		: 2,
    	iCodeError		: -1,
    	iCodeException	: -2,
        success: function(sMessage,oResults) {
            return {
                iCode		: this.iCodeSuccess,
                sMessage	: sMessage,
                oResults	: oResults
            };
        },
        warn: function(sMessage,oResults) {
            return {
                iCode		: this.iCodeWarn,
                sMessage	: sMessage,
                oResults	: oResults
            };
        },
        error: function(sMessage,oResults) {
            return {
                iCode		: this.iCodeError,
                sMessage	: sMessage,
                oResults	: oResults
            };
        },
        exception: function(sMessage) {
            return {
                iCode		: this.iCodeException,
                sMessage	: sMessage
            };
        }
    };
});
