sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/ComponentSupport"
], function (UIComponent) {
    "use strict";

    return UIComponent.extend("sap_taskui.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // additional initialization can be done here
        }
    });
});