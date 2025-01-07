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

        // Attach event handler to the input fields (if needed)
        var oFirstNameInput = this.byId("firstName");
        var oLastNameInput = this.byId("lastName");

        oFirstNameInput.attachChange(this.onInputChange, this);
        oLastNameInput.attachChange(this.onInputChange, this);
      },

      onInputChange: function (oEvent) {
        // Handle input change event
        var sValue = oEvent.getParameter("value");
        console.log("Input changed: " + sValue);
      },
    });
  }
);
