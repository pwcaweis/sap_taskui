sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("sap_taskui.controller.App", {
      onInit: function () {
        // Create a JSON model
        var oModel = new JSONModel({
          firstName: "",
          lastName: "",
        });
        // Set the model to the view
        this.getView().setModel(oModel);
      },
    });
  }
);
