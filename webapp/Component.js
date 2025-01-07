sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/Device", "sap_taskui/model/models"],
  function (UIComponent, Device, models) {
    "use strict";
    return UIComponent.extend("sap_taskui.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
        this.setModel(models.createDeviceModel(), "device");
      },
    });
  }
);
