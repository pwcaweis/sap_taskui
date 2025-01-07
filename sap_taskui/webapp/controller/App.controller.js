class AppController extends sap.ui.core.mvc.Controller {
    onInit: function() {
        // Initialization logic can be added here
    },

    onSubmit: function() {
        var oView = this.getView();
        var sFirstName = oView.byId("firstnameInput").getValue();
        var sLastName = oView.byId("lastnameInput").getValue();

        // Handle the submission logic here
        console.log("Firstname: " + sFirstName + ", Lastname: " + sLastName);
    }
}