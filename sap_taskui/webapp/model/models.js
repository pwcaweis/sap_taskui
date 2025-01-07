// This file defines the data models used in the application. It may include a JSON model to bind data to the view.

sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    "use strict";

    return {
        createInitialModel: function () {
            var oData = {
                Firstname: "",
                Lastname: ""
            };
            var oModel = new JSONModel(oData);
            return oModel;
        }
    };
});