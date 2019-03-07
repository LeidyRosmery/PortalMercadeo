sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "com/subciber/PortalMercadeo/servicio/login/Autenticacion",
  "sap/ui/core/UIComponent"
], function(Controller, Autenticacion, UIComponent) {
  "use strict";

  return Controller.extend("com.subciber.PortalMercadeo.controller.usuario.EditUsuario", {
    onInit: function(event) {

    },
    onRouteMatched: function(event) {

    },
    onAfterRendering: function() {

    },
    fnNavToHome: function() {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("appHome");
    },
    onLogin: function() {
      this.fnNavToHome();
    }
  });
});
